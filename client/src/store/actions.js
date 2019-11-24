// @flow
import * as actionTypes from './actionTypes';
import * as types from '../shared/types';

export const fetchIndexesFail = (error: Error): types.ActionFetchIndexesFail => ({
  type: actionTypes.FETCH_INDEXES_FAIL,
  payload: error,
});

export const fetchIndexesStart = (): types.ActionFetchIndexesStart => ({
  type: actionTypes.FETCH_INDEXES_START,
});

export const fetchIndexesSuccess = (value: ?Array<number>): types.ActionFetchIndexesSuccess => ({
  type: actionTypes.FETCH_INDEXES_SUCCESS,
  payload: value,
});

export const fetchValuesFail = (error: Error): types.ActionFetchValuesFail => ({
  type: actionTypes.FETCH_VALUES_FAIL,
  payload: error,
});

export const fetchValuesStart = (): types.ActionFetchValuesStart => ({
  type: actionTypes.FETCH_VALUES_START,
});

export const fetchValuesSuccess = (value: ?Object): types.ActionFetchValuesSuccess => ({
  type: actionTypes.FETCH_VALUES_SUCCESS,
  payload: value,
});
