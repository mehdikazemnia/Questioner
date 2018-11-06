module.exports = (state={showLogin:true,username:''}, action)=>{
    switch(action.type){
        case 'HIDE_LOGIN':
            return Object.assign({},{showLogin:false, username: action.username});
        break;
        case 'SHOW_LOGIN':
            return Object.assign({},state,{showLogin:true})
        break;
        default:
            return state;
        break;
    }
} 