// @flow
import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import Fib from '../components/Fib/Fib';
import OtherPage from '../components/OtherPage/OtherPage';

// const Fib = React.lazy(() => import('../components/Fib/Fib'));
// const OtherPage = React.lazy(() => import('../components/OtherPage/OtherPage'));

const App = () => (
  <div className={styles.App}>
    <header className={styles.App_header}>
      <h1 className={styles.App_title}>Fibonacci Calculator</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/otherpage">OtherPage</NavLink>
    </header>
    <div>
      <Switch>
        <Route path="/otherpage" component={OtherPage} />
        <Route path="/" exact component={Fib} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
