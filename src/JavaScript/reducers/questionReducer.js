module.exports = (state = {
    current: 1,
    answers: [],
    userAnswers: [],
    score: 0,
    timeIsUp: false,
    isPaused: false
}, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_USER_ANSWER':
            state.answers.push(action.answer);
            state.userAnswers.push(action.userAnswer);
            state.current++;
            return state;
        break;
        case 'TIME_IS_UP':
            return Object.assign(state, {timeIsUp: true});
        break;
        case 'TIMER_RESET':
            return Object.assign(state, {timeIsUp: false, isPaused: false});
        break;
        case 'PAUSE_TIMER':
            state.isPaused = true;
            return state;
        break;
        default: 
            return state;
        break;
    }
} 
