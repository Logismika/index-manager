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
        for (let i = 0; i < 2000; ++i) {
            const source = BigInt(Math.round(Math.random() * Number(indexManager.MaxNumber)));
            const chars = indexManager.numberToChars(source);
            const actual = indexManager.charsToNumber(chars);
            expect(source).eq(actual);
        }
    });
});