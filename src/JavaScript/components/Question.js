const React = require('react');
const {connect} = require('react-redux');

class Question extends React.Component{
    render(){
        return (<article className={`question${this.props.current == this.props.number ? '' : ' question--hidden'}`}>
            <header className='question__header'>
                {this.props.number} of {this.props.max}
            </header>
            <div className='question__content'>
                {this.props.question}
            </div>
            <div ref='questionAnswers' className='question__answers'>
                <div className='question__answer'>
                    <label>{this.props.answers[0]}</label>
                    <input value={1} type='radio' name={`answer_group_${this.props.number}`} />
                </div>
                <div className='question__answer'>
                    <label>{this.props.answers[1]}</label>
                    <input value={2} type='radio' name={`answer_group_${this.props.number}`} />
                </div>
                <div className='question__answer'>
                    <label>{this.props.answers[2]}</label>
                    <input value={3} type='radio' name={`answer_group_${this.props.number}`} />
                </div>
                <div className='question__answer'>
                    <label>{this.props.answers[3]}</label>
                    <input value={4} type='radio' name={`answer_group_${this.props.number}`} />
                </div>
            </div>
            <div ref='questionActions' className='question__actions'>
                <button className='question__action'>Next</button>
            </div>
        </article>);
    }

    componentDidMount(){
        let that = this;
        for(let answer of this.refs.questionAnswers.children){
            answer = answer.querySelector('input');
            answer.onclick = function(){
                that.userAnswered(this.getAttribute('value'));
            }
        }
    }

    componentDidUpdate(){
        if(this.props.timeIsUp && this.props.current == this.props.number){
            // Time is up
            let answer = this.props.correct;
            this.props.dispatch({
                type: 'ADD_USER_ANSWER',
                answer,
                userAnswer: 0
            })
        }else if(this.props.current == this.props.number){
            this.props.dispatch({
                type: 'TIMER_RESET'
            })
        }
    }

    userAnswered(userAnswer){
        let answer = this.props.correct;
        this.props.dispatch({
            type: 'ADD_USER_ANSWER',
            answer,
            userAnswer
        })
        this.props.dispatch({
            type: 'PAUSE_TIMER'
        })
    }

    
    componentDidUpdate(){
        console.log("Updated")
    }
 
}

module.exports = connect((state)=>{
    return {
        current: state.question.current,
        timeIsUp: state.question.timeIsUp
    }
})(Question); 