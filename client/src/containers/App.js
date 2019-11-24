// @flow
import React, { Suspense, lazy } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import styles from './App.module.css';

const Fib = lazy(() => import('../components/Fib/Fib'));
const OtherPage = lazy(() => import('../components/OtherPage/OtherPage'));

const App = () => (
  <div className={styles.App}>
    <header className={styles.App_header}>
      <h1 className={styles.App_title}>Fibonacci Calculator</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/otherpage">OtherPage</NavLink>
    </header>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/otherpage" component={OtherPage} />
          <Route path="/" exact component={Fib} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  </div>
);

export default App;
