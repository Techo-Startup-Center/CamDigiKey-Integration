/// <reference types="node" />
export default class AesHelper {
    private static AES_ALGORITHM;
    static encrypt(data: Buffer): Buffer;
    static decrypt(data: Buffer): Buffer;
}
