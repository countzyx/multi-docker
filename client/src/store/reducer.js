// @flow
import * as _ from 'lodash';
import * as actionTypes from './actionTypes';
import type { Action, FibState } from '../shared/types';

const initialState: FibState = {
  error: null,
  index: '',
  loading: false,
  seenIndexes: [],
  values: {},
};

const reducer = (state: FibState = initialState, action: Action) => {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.FETCH_INDEXES_FAIL:
    case actionTypes.FETCH_VALUES_FAIL: {
      newState.error = action.payload;
      newState.loading = false;
      break;
    }
    case actionTypes.FETCH_INDEXES_START: {
      newState.error = false;
      newState.loading = true;
      newState.seenIndexes = [];
      break;
    }
    case actionTypes.FETCH_VALUES_START: {
      newState.error = false;
      newState.loading = true;
      newState.values = {};
      break;
    }
    case actionTypes.FETCH_INDEXES_SUCCESS: {
      newState.loading = false;
      newState.seenIndexes = action.payload;
      break;
    }
    case actionTypes.FETCH_VALUES_SUCCESS: {
      newState.loading = false;
      newState.values = action.payload;
      break;
    }
    case actionTypes.SET_INDEX: {
      newState.index = action.payload;
      break;
    }
    default: {
      return state;
    }
  }

  return newState;
};

export default reducer;
