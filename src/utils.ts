import { byte } from "@logismika/crypto";
import { DigitSize, Chars, Masks } from "./consts";
import { AllowedChar } from "./types";

export const checkConstants = () => {
    if (DigitSize !== Chars.length) {
        throw new Error(`Length of _chars should be ${DigitSize} but ${Chars.length}`);
    }

    for (let i = 0; i < Chars.length; i += 1) {
        for (let j = i + 1; j < Chars.length; j += 1) {
            if (Chars[i] == Chars[j]) {
                throw new Error("Found doublicate: " + Chars[i]);
            }
        }
    }

    for (let i = 0; i < Masks.length; i++) {
        if (Masks[i]! >= DigitSize) {
            throw new Error(`Mask number at [${i}] should be less than ${DigitSize} but ${Masks[i]}`);
        }
    }
}

export const getByte = (value: number | bigint): byte => {
    if (typeof (value) === "number") {
        if (!isFinite(value)) {
            throw new Error(`Value should be a number, but ${value}`);
        }

        if (value % 1.0 !== 0) {
            throw new Error(`Value should be integer, but ${value}`);
        }
    }

    if (value < 0) {
        throw new Error(`Value should be greate or equal 0, but ${value}`);
    }

    if (value > 255) {
        throw new Error(`Value should be less or equal 255, but ${value}`);
    }

    return Number(value) as byte;
}

export const buildIndexesMap = (chars: AllowedChar[]): Map<AllowedChar, byte> =>
    new Map<AllowedChar, byte>(chars.map((ch, index) => ([ch, getByte(index)])));