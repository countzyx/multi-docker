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

export const fetchValueForIndexFail = (error: Error): types.ActionFetchValueForIndexFail => ({
  type: actionTypes.FETCH_VALUE_FOR_INDEX_FAIL,
  payload: error,
});

export const fetchValueForIndexStart = (index: number): types.ActionFetchValueForIndexStart => ({
  type: actionTypes.FETCH_VALUE_FOR_INDEX_START,
  payload: index,
});

export const fetchValueForIndexSuccess = (value: ?Object): types.ActionFetchValueForIndexSuccess => ({
  type: actionTypes.FETCH_VALUE_FOR_INDEX_SUCCESS,
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

export const setIndex = (index: number): types.ActionSetIndex => ({
  type: actionTypes.SET_INDEX,
  payload: index,
});
