// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch, ReduxProps } from 'redux';
import type { Action, FibState } from '../../shared/types';
import * as actions from '../../store/actions';
import Spinner from '../UI/Spinner/Spinner';

type OwnProps = {||};

const mapStateToProps = (state: FibState) => ({
  error: state.error,
  index: state.index,
  loading: state.loading,
  seenIndexes: state.seenIndexes,
  values: state.values,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onFetchIndexes: () => dispatch(actions.fetchIndexesStart()),
  onFetchValueForIndex: (index: number) => dispatch(actions.fetchValueForIndexStart(index)),
  onFetchValues: () => dispatch(actions.fetchValuesStart()),
  onSetIndex: (index: number) => dispatch(actions.setIndex(index)),
});

type Props = {|
  ...OwnProps,
  ...ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps>,
|};

const Fib = (props: Props) => {
  const {
    error,
    index,
    loading,
    onFetchIndexes,
    onFetchValueForIndex,
    onFetchValues,
    onSetIndex,
    seenIndexes,
    values,
  } = props;

  React.useEffect(() => {
    onFetchIndexes();
  }, [onFetchIndexes]);

  React.useEffect(() => {
    onFetchValues();
  }, [onFetchValues]);

  const onSubmitHandler = React.useCallback(
    (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      onFetchValueForIndex(index);
    },
    [index, onFetchValueForIndex]
  );

  const onChangeHandler = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      const newIndex = +event.currentTarget.value;
      onSetIndex(newIndex);
    },
    [onSetIndex]
  );

  if (error) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <h1>Error&nbsp;-&nbsp;{error.message}</h1>;
  }

  if (loading) {
    return <Spinner />;
  }

  const indexList = seenIndexes.map(({ number }) => number).join(', ');
  const valueList = Object.keys(values).map(key => (
    <div key={key}>{`For index ${key} I calculated ${values[key]}`}</div>
  ));

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="index">
          Enter your index:
          <input id="index" type="number" value={index} onChange={event => onChangeHandler(event)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {indexList}

      <h3>Calculated Values:</h3>
      {valueList}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Fib);
