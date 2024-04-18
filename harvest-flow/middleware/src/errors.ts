import type { ErrorMessageFxn } from '@paima/sdk/utils';
import { buildErrorCodeTranslator } from '@paima/sdk/utils';
import type { EndpointErrorFxn } from '@paima/sdk/mw-core';
import {
  PaimaMiddlewareErrorCode,
  PAIMA_MIDDLEWARE_ERROR_MESSAGES,
  buildAbstractEndpointErrorFxn,
} from '@paima/sdk/mw-core';

export const enum MiddlewareErrorCode {
  GENERIC_ERROR = PaimaMiddlewareErrorCode.FINAL_PAIMA_GENERIC_ERROR + 1,
}

type ErrorMessageMapping = Record<MiddlewareErrorCode, string>;
const MIDDLEWARE_ERROR_MESSAGES: ErrorMessageMapping = {
  [MiddlewareErrorCode.GENERIC_ERROR]: 'Unspecified generic Game error',
};

const errorMessageFxn: ErrorMessageFxn = buildErrorCodeTranslator({
  ...PAIMA_MIDDLEWARE_ERROR_MESSAGES,
  ...MIDDLEWARE_ERROR_MESSAGES,
});

export function buildEndpointErrorFxn(endpointName: string): EndpointErrorFxn {
  return buildAbstractEndpointErrorFxn(errorMessageFxn, endpointName);
}
