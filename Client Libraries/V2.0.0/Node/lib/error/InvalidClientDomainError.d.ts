import BaseError from "./BaseError";
export default class InvalidClientDomainError extends BaseError {
    constructor(message: string);
}
