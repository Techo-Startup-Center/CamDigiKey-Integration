import BaseError from "./BaseError";
export default class InvalidTokenSignatureError extends BaseError {
    constructor(message: string);
}
