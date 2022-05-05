import BaseError from "./BaseError";
export default class ExpiredAccessTokenError extends BaseError {
    constructor(message: string);
}
