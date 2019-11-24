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

export type ActionFetchValueForIndexFail = {
  type: typeof actionTypes.FETCH_VALUE_FOR_INDEX_FAIL,
  payload: Error,
};

export type ActionFetchValueForIndexStart = {
  type: typeof actionTypes.FETCH_VALUE_FOR_INDEX_START,
  payload: number,
};

export type ActionFetchValueForIndexSuccess = {
  type: typeof actionTypes.FETCH_VALUE_FOR_INDEX_SUCCESS,
  payload: ?Object,
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

export type ActionSetIndex = {
  type: typeof actionTypes.SET_INDEX,
  payload: number,
};

export type Action =
  | ActionFetchIndexesFail
  | ActionFetchIndexesStart
  | ActionFetchIndexesSuccess
  | ActionFetchValueForIndexFail
  | ActionFetchValueForIndexStart
  | ActionFetchValueForIndexSuccess
  | ActionFetchValuesFail
  | ActionFetchValuesStart
  | ActionFetchValuesSuccess
  | ActionSetIndex;
