import { byte } from "@logismika/crypto";
import { Chars, DigitSize, IndexesMap, Power } from "./consts";
import xorIndexes from "./xorIndexes";
import * as R from "ramda";
import { getAllowedChar, getByte } from "./utils";

class IndexManager {

    private readonly maxNumber: bigint = BigInt(DigitSize) ** BigInt(this.digitCount);

    constructor(
        private readonly digitCount: byte = 6,
        private readonly magicNumber = 0xAACAA3AAAEAA5AAAn) {
    }

    public get DigitCount(): byte {
        return this.digitCount;
    }

    public get MaxNumber(): bigint {
        return this.maxNumber;
    }

    public numberToChars(number: bigint): string {
        if (number > this.maxNumber) {
            throw new RangeError(`Number is too big: ${number} > ${this.maxNumber}.`);
        }

        return xorIndexes(true, this.getIndexes(number)).map(index => Chars[index]!).join("");
    }

    public charsToNumber(chars: string): bigint {
        if (chars.length !== this.digitCount) {
            throw new RangeError(`Length of input array should be ${this.digitCount} but ${chars.length}.`);
        }

        const indexes = xorIndexes(false, R.range(0, chars.length).map(i => IndexesMap.get(getAllowedChar(chars.charAt(i)))!));
        return this.getNumber(indexes);
    }

    private getIndexes(number: bigint): byte[] {
        const n = number ^ (this.magicNumber % this.maxNumber);
        return R.range(0, this.digitCount).map(i => getByte((n >> BigInt(Power * i)) % BigInt(DigitSize)));
    }

    private getNumber(indexes: byte[]): bigint {
        let n = 0n;
        indexes.reverse().forEach((index) => {
            n <<= BigInt(Power);
            n |= BigInt(index);
        });

        return n ^ (this.magicNumber % this.maxNumber);
    }
}

export default IndexManager;