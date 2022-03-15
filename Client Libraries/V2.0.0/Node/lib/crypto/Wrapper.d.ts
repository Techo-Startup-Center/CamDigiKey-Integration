interface WrappedRequest {
    clientId: string;
    params: string;
    signature: string;
}
interface WrappedResponse {
    data: string;
    signature: string;
}
export default class Wrapper {
    static wrapRequest(request: Object): WrappedRequest;
    static unwrapResponse(response: WrappedResponse): Object;
}
export {};
