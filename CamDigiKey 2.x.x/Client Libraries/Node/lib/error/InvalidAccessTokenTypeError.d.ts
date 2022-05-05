import BaseError from "./BaseError";
export default class InvalidAccessTokenTypeError extends BaseError {
    constructor(message: string);
}
