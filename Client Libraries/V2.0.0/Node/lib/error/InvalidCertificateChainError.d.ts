import BaseError from "./BaseError";
export default class InvalidCertificateChainError extends BaseError {
    constructor(message: string);
}
