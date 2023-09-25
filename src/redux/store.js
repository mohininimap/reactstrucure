import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddelware from "redux-saga";

// reducer
import { rootReducer } from "../redux/reducers";
// saga
import rootSaga from "../saga";

// saga middelware
const sagaMiddelware = createSagaMiddelware();
// redux extension
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// enhancers
const middelwareEnhancer = applyMiddleware(sagaMiddelware);
// const composeEnhancer = compose(middelwareEnhancer, reduxExtension);
const composeEnhancer = compose(middelwareEnhancer);

export const store = createStore(rootReducer, composeEnhancer);

sagaMiddelware.run(rootSaga);
