const React = require('react');

const Timer = require('./Timer');
const Login = require('./Login');
const QuestionWrapper = require('./QuestionWrapper');
const LeaderBoard = require('./LeaderBoard');

class Index extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Login />
                <Timer seconds={10} />
                <QuestionWrapper address='questions.json' />
                <LeaderBoard />
            </React.Fragment>
        );
    }
}

module.exports = Index;