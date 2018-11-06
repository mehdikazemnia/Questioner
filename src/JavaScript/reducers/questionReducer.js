const ScoreComputer = require('../helpers/ScoreComputer');

module.exports = (state = {
    current: 0,
    answers: [],
    userAnswers: [],
    score: 0,
    timeIsUp: false,
    isPaused: true,
    statistics: {
        wrong: 0,
        notAnswered: 0,
        correct: 0
    }
}, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_USER_ANSWER':
            state.answers.push(action.answer);
            state.userAnswers.push(action.userAnswer);

            state.score = ScoreComputer.compute(action.userAnswer, action.answer, state.score);

            let answerStatus = ScoreComputer.checkAnswer(action.userAnswer, action.answer);
            switch(answerStatus){
                case -1:
                    state.statistics.wrong++;
                break;
                case 1:
                    state.statistics.correct++;
                break;
                case 0:
                    state.statistics.notAnswered++;
                break;
            }

            return Object.assign({},state);
        break;
        case 'NEXT_QUESTION':
            state.current++;
            return Object.assign({},state,{timeIsUp: false, isPaused: false});
        break;
        case 'TIME_IS_UP':
            return Object.assign({},state, {timeIsUp: true});
        break;
        case 'PAUSE_TIMER':
            state.isPaused = true;
            return Object.assign({},state);
        break;
        case 'START':
            return Object.assign({}, state, {current: 1, isPaused: false});
        break;
        default: 
            return state;
        break;
    }
}