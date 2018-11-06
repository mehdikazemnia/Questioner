const React = require('react');
const axios = require('axios');

const Question = require('./Question');

class QuestionWrapper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            questions:[]
        };
        console.log(this.props)
        this.renderQuestions();
    }
    
    render(){
        return (
            <div className='questionWrapper'>
                {this.state.questions}
            </div>
        );
    }

    getQuestions(){
        return new Promise((resolve)=>{
            axios.get(`/${this.props.address}`).then((result)=>{
                resolve(result.data)
            });
        });
    }
    renderQuestions(){
        this.getQuestions().then((data)=>{

            let questions = [];
            for(let question of data){
                questions.push(<Question 
                    correctAnswer={question.correctAnswer} 
                    answers={question.answers} 
                    number={question.number}
                    question={question.question}
                    max={data.length} />);
            }

            this.setState({
                questions
            })
        })
    }
}

module.exports = QuestionWrapper;