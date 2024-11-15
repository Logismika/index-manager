import { byte } from "@logismika/crypto";
import xorIndexes from "../src/xorIndexes";
import { expect } from "chai";

describe("xorIndexes unit tests", () => {
    it("forward should work", () => {
        const source: byte[] = [1, 2, 3, 4, 17, 67, 11];
        const result1 = xorIndexes(true, source);

        expect(source).length(result1.length);
        expect(source).not.deep.eq(result1);
    });

    it("backward should work", () => {
        const source: byte[] = [1, 2, 3, 4, 17, 67, 11];
        const result1 = xorIndexes(false, source);

        expect(source).length(result1.length);
        expect(source).not.deep.eq(result1);
    });

    it("forward-backward should work", () => {
        const source: byte[] = [1, 2, 3, 4, 17, 67, 11];
        const result1 = xorIndexes(true, source);
        expect(source).length(result1.length);
        const result2 = xorIndexes(false, result1);
        expect(result2).length(result1.length);
        
        expect(result1).not.deep.eq(result2);
        expect(source).deep.eq(result2);
    });
});