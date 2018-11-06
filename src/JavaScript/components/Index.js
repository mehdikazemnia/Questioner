const React = require('react');

const Timer = require('./Timer');
const Login = require('./Login');
const QuestionWrapper = require('./QuestionWrapper');

class Index extends React.Component{
    render(){
        return (
            <div className='cont'>
                <Timer seconds={3} />
                <QuestionWrapper address='questions.json' />
            </div>
        );
    }
}

module.exports = Index;