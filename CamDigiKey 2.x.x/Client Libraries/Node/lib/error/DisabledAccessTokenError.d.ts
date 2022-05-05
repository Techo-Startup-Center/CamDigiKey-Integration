import BaseError from "./BaseError";
export default class DisabledAccessTokenError extends BaseError {
    constructor(message: string);
}
