import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";

import configureStore from "store";

import Application from "modules/App";

const initialState = {};
const history = createHistory();

const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Application />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"),
);
