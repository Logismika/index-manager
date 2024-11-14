import { DigitSize } from "./consts";

class IndexManager {

    private readonly maxNumber: number;

    constructor(
        private readonly digitCount = 6,
        private readonly magicNumber = 0xAACAA3AAAEAA5AAAn) {

        this.maxNumber = Math.pow(DigitSize, digitCount);
    }
}

export default IndexManager;