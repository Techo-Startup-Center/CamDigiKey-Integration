import BaseError from "./BaseError";
export default class AccessTokenIdEmptyError extends BaseError {
    constructor(message: string);
}
