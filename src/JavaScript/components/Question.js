const React = require('react');

class Question extends React.Component{
    render(){
        return (<article className='question'>
            <header className='question__header'>
                {this.props.number} of {this.props.max}
            </header>
            <div className='question__content'>
                {this.props.question}
            </div>
            <div ref='questionAnswers' className='question__answers'>
                <div className='question__answer'>
                    <label>{this.props.answers[0]}</label>
                    <input type='radio' name={`answer_group_${this.props.questionNumber}`} />
                </div>
                <div className='question__answer'>
                    <label>{this.props.answers[1]}</label>
                    <input type='radio' name={`answer_group_${this.props.questionNumber}`} />
                </div>
                <div className='question__answer'>
                    <label>{this.props.answers[2]}</label>
                    <input type='radio' name={`answer_group_${this.props.questionNumber}`} />
                </div>
                <div className='question__answer'>
                    <label>{this.props.answers[3]}</label>
                    <input type='radio' name={`answer_group_${this.props.questionNumber}`} />
                </div>
            </div>
            <div ref='questionActions' className='question__actions'>
                <button className='question__action'>Next</button>
            </div>
        </article>);
    }
}

module.exports = Question;