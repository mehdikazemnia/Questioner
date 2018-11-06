module.exports = (state={showLeaderBoard:false}, action)=>{
    switch(action.type){
        case 'HIDE_LEADERBOARD':
            return {showLeaderBoard:false};
        break;
        case 'SHOW_LEADERBOARD':
            return {showLeaderBoard:true};
        break;
        default:
            return state;
        break;
    }
} 