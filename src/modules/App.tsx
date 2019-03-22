import * as React from "react";
import { hot } from "react-hot-loader";

import { Route } from "react-router";

import ButtonExample from "modules/button-example";

import * as styles from "./App.css";

const App = () => (
    <div className={styles.app}>
        <Route exact path="/" component={ButtonExample} />
    </div>
);

export default hot(module)(App);
