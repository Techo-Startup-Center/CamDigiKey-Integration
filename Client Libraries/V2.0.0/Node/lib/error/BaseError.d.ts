import { ErrorCode } from "./ErrorCode";
export default class BaseError extends Error {
    protected errorCode: ErrorCode;
    constructor(message: string, errorCode: ErrorCode);
}
