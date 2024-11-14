import { byte } from "@logismika/crypto";
import { Chars, DigitSize, Power } from "./consts";
import xorIndexes from "./xorIndexes";
import * as R from "ramda";
import { getByte } from "./utils";

class IndexManager {

    private readonly maxNumber: bigint = BigInt(DigitSize) ** BigInt(this.digitCount);

    constructor(
        private readonly digitCount: byte = 6,
        private readonly magicNumber = 0xAACAA3AAAEAA5AAAn) {
    }
   
    public get DigitCount(): byte {
        return this.digitCount;
    }

    public numberToChars(number: number | bigint): string {
        if (number > this.maxNumber) {
            throw new RangeError(`Number is too big: ${number}`);
        }

        return typeof number === "number" ?
            this.numberToChars(BigInt(number)) :
            xorIndexes(true, this.getIndexes(number)).map(index => Chars[index]!).join("");
    }

    private getIndexes(number: bigint): byte[] {
        const n = number ^ (this.magicNumber % this.maxNumber);
        return R.range(0, this.digitCount).map(i => getByte((n >> BigInt(Power * i)) % BigInt(DigitSize)));
    }
}

export default IndexManager;