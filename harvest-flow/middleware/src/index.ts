import { paimaEndpoints } from '@paima/sdk/mw-core';
import {
  initMiddlewareCore,
  userWalletLoginWithoutChecks,
  updateBackendUri,
  getRemoteBackendVersion,
} from '@paima/sdk/mw-core';
import { gameBackendVersion, APP_NAME } from '@harvest-flow/utils';
import {queryEndpoints} from './endpoints/queries';


initMiddlewareCore(APP_NAME, gameBackendVersion);

const endpoints = {
  ...paimaEndpoints,
  ...queryEndpoints,
};

export * from './types';
export type * from './types';
export { userWalletLoginWithoutChecks, updateBackendUri, getRemoteBackendVersion };

export default endpoints;
