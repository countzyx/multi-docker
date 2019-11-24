// @flow
import { all, put, takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import axios from '../shared/axios';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as types from '../shared/types';

export function* fetchIndexesSaga(): Saga<void> {
  try {
    const response = yield axios.get('/api/values/all');
    yield put(actions.fetchIndexesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchIndexesFail(error));
  }
}

export function* fetchValueForIndexSaga(action: types.ActionFetchValueForIndexStart): Saga<void> {
  try {
    const { payload } = action;
    const response = yield axios.post('/api/values', { index: payload });
    yield put(actions.fetchValuesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchValuesFail(error));
  }
}

export function* fetchValuesSaga(): Saga<void> {
  try {
    const response = yield axios.get('/api/values/current');
    yield put(actions.fetchValuesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchValuesFail(error));
  }
}

export function* watchSagas(): Saga<void> {
  yield all([
    takeEvery(actionTypes.FETCH_INDEXES_START, fetchIndexesSaga),
    takeEvery(actionTypes.FETCH_VALUES_START, fetchValuesSaga),
  ]);
}
