const {createStore, combineReducers} = require('redux');
 const questionReducer = require('../reducers/questionReducer');
 module.exports = createStore(combineReducers({
    question:questionReducer
}),
/* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 