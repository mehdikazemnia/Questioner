const React = require('react');

const {connect} = require('react-redux');

const Button = require('./subComponents/Button');

class Question extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showNext: false,
            answered: false,
            status: -1
        }
    }

    render(){
        return (<article className={`question${this.props.current == this.props.number ? ' question--show' : ''} ${this.statusClass} ${this.state.answered ? ' question--locked' : ''}`}>
            <div className='question__bar'></div>
            <header className='question__header'>
                Question Number {this.props.number} of {this.props.max}:
            </header>
            <div className='question__content'>
                {this.props.question}
            </div>
            <div ref='questionAnswers' className='question__answers'>
                <div className='question__answer'>
                    <input id={`answer_${this.props.number}_1`} value={1} type='radio' name={`answer_group_${this.props.number}`} />
                    <label htmlFor={`answer_${this.props.number}_1`}>{this.props.answers[0]}</label>
                </div>
                <div className='question__answer'>
                    <input id={`answer_${this.props.number}_2`} value={2} type='radio' name={`answer_group_${this.props.number}`} />
                    <label htmlFor={`answer_${this.props.number}_2`}>{this.props.answers[1]}</label>
                </div>
                <div className='question__answer'>
                    <input id={`answer_${this.props.number}_3`} value={3} type='radio' name={`answer_group_${this.props.number}`} />
                    <label htmlFor={`answer_${this.props.number}_3`}>{this.props.answers[2]}</label>
                </div>
                <div className='question__answer'>
                    <input id={`answer_${this.props.number}_4`} value={4} type='radio' name={`answer_group_${this.props.number}`} />
                    <label htmlFor={`answer_${this.props.number}_4`}>{this.props.answers[3]}</label>
                </div>
            </div>
            <div ref='questionActions' className={`question__actions${this.state.showNext ? ' question__actions--show' : ''}`}>
                <Button text={this.props.number == this.props.max ? 'Finish!' : 'Next'} onClick={this.next.bind(this)} className='question__action' />
            </div>
        </article>);
    }

    componentDidMount(){
        let that = this;
        for(let answer of this.refs.questionAnswers.children){
            answer = answer.querySelector('input');
            answer.onclick = function(){
                if(!that.props.timeIsUp){
                    that.userAnswered(this.getAttribute('value'));
                }
            }
        }

    }

    next(){
        if(this.props.number == this.props.max){
            // Finished!
            this.props.dispatch({
                type: 'SHOW_LEADERBOARD'
            })
        }else{
            this.props.dispatch({
                type: 'NEXT_QUESTION'
            })
        }
    }

    componentDidUpdate(){

        if(!this.state.answered && this.props.timeIsUp && this.props.current == this.props.number){

            this.userAnswered(0)

        }

    }

    userAnswered(userAnswer){
        if(this.props.number == this.props.current){
            let answer = this.props.correctAnswer;
            this.props.dispatch({
                type: 'ADD_USER_ANSWER',
                answer,
                userAnswer
            })
            this.props.dispatch({
                type: 'PAUSE_TIMER'
            })

            let status;

            if(answer == userAnswer){
                status = 1;
            }else if(userAnswer == 0){
                status = 2;
            }else{
                status = 0;
            }


            this.setState({
                showNext: true,
                answered: true,
                status
            });
        }else{
            console.error("Wrong Question to Answer")
        }
    }
    get statusClass(){
        switch(this.state.status){
            case -1:
                return '';
            break;
            case 0:
                return 'question--wrong';
            break;
            case 1:
                return 'question--correct';
            break;
            case 2:
                return 'question--warning';
            break;
        }
    }
}

module.exports = connect((state)=>{
    return {
        timeIsUp: state.question.timeIsUp,
        current: state.question.current
    }
})(Question);