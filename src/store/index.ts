import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import rootReducer from "reducers";
import rootSaga from "sagas";

import { composeEnhancers } from "./composeEnhancers";

export default function configureStore(initialState, history) {
    const routerMiddleware = createRouterMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware)),
    );

    // run sagas
    sagaMiddleware.run(rootSaga);

    // Hot module replacement
    if (module.hot) {
        module.hot.accept("../reducers/index", () => {
            const newRootReducer = require("../reducers/index").default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}
