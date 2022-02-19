import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { categoriesReducer } from "./reducers/index";

const reducers = combineReducers({
  categories: categoriesReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, middleware);

export default store;
