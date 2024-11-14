import { byte } from "@logismika/crypto";
import { Masks, MasksLength } from "./consts";
import { getByte } from "./utils";

const xorIndexes = (forward: boolean, indexes: readonly byte[]) => {
    const result: byte[] = [];

    indexes.forEach((index, i, col) => {
        const b = getByte(index ^ Masks[i % MasksLength]!);
        result.push(getByte((i > 0) ? b ^ (forward ? result[0]! : col[0]!) : b));
    });

    return result;
}

export default xorIndexes;