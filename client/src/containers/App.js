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
    <header>
      <h1>Fibonacci Calculator</h1>
      <NavLink to="/" className={styles.App_link}>
        Home
      </NavLink>
      <NavLink to="/otherpage" className={styles.App_link}>
        OtherPage
      </NavLink>
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
