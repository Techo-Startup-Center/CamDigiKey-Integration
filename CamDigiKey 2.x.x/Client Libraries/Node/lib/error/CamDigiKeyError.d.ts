import BaseError from "./BaseError";
export default class CamDigiKeyError extends BaseError {
    constructor(message: string, errorCode?: number);
}
