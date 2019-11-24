// @flow
import * as actionTypes from '../store/actionTypes';

export type FibState = {
  error: ?Error,
  index: string,
  loading: false,
  seenIndexes: Array<number>,
  values: Object,
};

export type ActionFetchIndexesFail = {
  type: typeof actionTypes.FETCH_INDEXES_FAIL,
  payload: Error,
};

export type ActionFetchIndexesStart = {
  type: typeof actionTypes.FETCH_INDEXES_START,
};

export type ActionFetchIndexesSuccess = {
  type: typeof actionTypes.FETCH_INDEXES_SUCCESS,
  payload: ?Array<number>,
};

export type ActionFetchValuesFail = {
  type: typeof actionTypes.FETCH_VALUES_FAIL,
  payload: Error,
};

export type ActionFetchValuesStart = {
  type: typeof actionTypes.FETCH_VALUES_START,
};

export type ActionFetchValuesSuccess = {
  type: typeof actionTypes.FETCH_VALUES_SUCCESS,
  payload: ?Object,
};

export type Action =
  | ActionFetchIndexesFail
  | ActionFetchIndexesStart
  | ActionFetchIndexesSuccess
  | ActionFetchValuesFail
  | ActionFetchValuesStart
  | ActionFetchValuesSuccess;
