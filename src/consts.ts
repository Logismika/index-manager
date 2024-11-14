import { byte } from "@logismika/crypto";
import { AllowedChar } from "./types";
import { buildIndexesMap, checkConstants } from "./utils";

export const Power: byte = 6;
export const DigitSize = 1 << Power;

export const Chars: AllowedChar[] = [
    'n', 'a', 's', 'r', 'e', 'q', 't', 'b', 'j', 'w', 'u', 'i', 'l', 'm', 'f', 'y',
    'N', 'A', 'S', 'R', 'E', 'Q', 'T', 'B', 'J', 'W', 'U', 'I', 'L', 'M', 'F', 'Y',
    'o', 'p', 'd', 'g', 'h', 'k', 'z', 'x', 'c', 'v', '4', '1', '8', '0', '7', '3',
    'O', 'P', 'D', 'G', 'H', 'K', 'Z', 'X', 'C', 'V', '_', '9', '6', '2', '-', '5',
] as const;

export const Masks: byte[] = [0x19, 0x15, 0x0C, 0x02, 0x07] as const;

export const MasksLength = Masks.length;

export const IndexesMap: Map<AllowedChar, byte> = buildIndexesMap(Chars);

checkConstants();