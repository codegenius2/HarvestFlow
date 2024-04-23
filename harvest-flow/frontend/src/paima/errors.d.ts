import type { EndpointErrorFxn } from '@paima/sdk/mw-core';
export declare const enum MiddlewareErrorCode {
    GENERIC_ERROR = 1000001
}
export declare function buildEndpointErrorFxn(endpointName: string): EndpointErrorFxn;
declare const _default: {};
export default _default;
