const React = require('react');
 const { connect } = require('react-redux');
 class LeaderBoard extends React.Component{
     render(){
        return (
            <div ref='leaderBoard' className={`leaderBoard${this.props.showLeaderBoard ? '' : ' none'}`}>
                <div className='leaderBoard__box'>
                    <h2>
                        {this.props.username}, your Score is {this.props.score}
                    </h2>
                    <div className='leaderBoard__statistics'>
                        <span className='leaderBoard__statistic'>
                            {this.props.wrong} Wrong
                        </span>
                        <span className='leaderBoard__statistic'>
                            {this.props.correct} Correct
                        </span>
                        <span className='leaderBoard__statistic'>
                            {this.props.notAnswered} Not Answered
                        </span>
                    </div>
                </div>
            </div>
        );
    }
     componentDidUpdate(){
        if(this.props.showLeaderBoard){
            setTimeout(()=>{
                this.refs.leaderBoard.classList.add('leaderBoard--show');
            },100)
        }
    }
 }
 module.exports = connect((state)=>{
     return {
        username: state.login.username,
        score: state.question.score,
        wrong: state.question.statistics.wrong,
        correct: state.question.statistics.correct,
        notAnswered: state.question.statistics.notAnswered,
        showLeaderBoard: state.leaderBoard.showLeaderBoard
    };
 })(LeaderBoard); 