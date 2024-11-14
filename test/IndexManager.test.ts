import { byte } from "@logismika/crypto";
import xorIndexes from "../src/xorIndexes";
import { expect } from "chai";
import IndexManager from "../src/IndexManager";

describe("IndexManager unit tests", () => {
    it("numberToChars", () => {
        const indexManager = new IndexManager();
        for (let i = 0; i < 2000; ++i) {
            const actual = indexManager.numberToChars(i);
            expect(actual).length(indexManager.DigitCount);
        }
        const source: byte[] = [1, 2, 3, 4, 17, 67, 11];
        const result1 = xorIndexes(true, source);

        expect(source).length(result1.length);
        expect(source).not.deep.eq(result1);
    });
});