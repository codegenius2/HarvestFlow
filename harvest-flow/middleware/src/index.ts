import { paimaEndpoints } from '@paima/sdk/mw-core';
import {
  initMiddlewareCore,
  userWalletLoginWithoutChecks,
  updateBackendUri,
  getRemoteBackendVersion,
} from '@paima/sdk/mw-core';
import { gameBackendVersion, APP_NAME } from '@harvest-flow/utils';


initMiddlewareCore(APP_NAME, gameBackendVersion);

const endpoints = {
  ...paimaEndpoints,
};

export * from './types';
export type * from './types';
export { userWalletLoginWithoutChecks, updateBackendUri, getRemoteBackendVersion };

export default endpoints;
