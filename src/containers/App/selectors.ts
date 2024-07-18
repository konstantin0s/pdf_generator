import { createSelector } from 'reselect';
import { RootState } from '../../types';
import { appSlice } from './slice';
import { AppContainer } from './types';

export const domain = (state: RootState) => state.app ?? appSlice;

export const loadingStatusSelector = createSelector(
  domain,
  (app: AppContainer) => {
    return app.status ?? '';
  }
);

export const productsListSelector = createSelector(
  domain,
  (app: AppContainer) => {
    return app.products ?? [];
  }
);

export const productsLoadingSelector = createSelector(
  domain,
  (app: AppContainer) => {
    return app.loading ?? false;
  }
);

export const cartItemsSelector = createSelector(domain, (app: AppContainer) => {
  return app.items ?? [];
});
