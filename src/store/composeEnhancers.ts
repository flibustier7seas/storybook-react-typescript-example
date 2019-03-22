import { compose } from "redux";

// tslint:disable:no-string-literal
const getReduxDevToolsCompose = () =>
    process.env.NODE_ENV !== "production" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
        ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
              name: "MyBoilerplate",
              actionsBlacklist: ["REDUX_STORAGE_SAVE"],
          })
        : undefined;

export const composeEnhancers = getReduxDevToolsCompose() || compose;
