const {createStore, combineReducers} = require('redux');

const questionReducer = require('../reducers/questionReducer');
const loginReducer = require('../reducers/loginReducer');
const leaderBoardReducer = require('../reducers/leaderBoardReducer');

module.exports = createStore(combineReducers({
    login: loginReducer,
    question: questionReducer,
    leaderBoard: leaderBoardReducer
}));