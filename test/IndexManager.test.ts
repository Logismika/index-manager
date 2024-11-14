import { expect } from "chai";
import IndexManager from "../src/IndexManager";

describe("IndexManager unit tests", () => {
    it("numberToChars", () => {
        const indexManager = new IndexManager();
        for (let i = 0n; i < 2000n; ++i) {
            const actual = indexManager.numberToChars(i);
            expect(actual).length(indexManager.DigitCount);
        }
    });

    it("charsToNumber", () => {
        const indexManager = new IndexManager();
        for (let i = 0n; i < 2000n; ++i) {
            const source = BigInt(Math.round(Math.random() * Number.MAX_SAFE_INTEGER));
            const chars = indexManager.numberToChars(i);
            const actual = indexManager.charsToNumber(chars);

            console.log("charsToNumber number", {source, chars, actual});
            expect(source).eq(actual);
        }
    });
});