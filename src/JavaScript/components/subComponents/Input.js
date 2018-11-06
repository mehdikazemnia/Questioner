const React = require('react');
 class Input extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            focus: false
        }
    }
     render(){
        return (
            <div className={`input${this.props.isError ? ' input--error' : ''}`}>
                <div className='input__text'>
                    {this.props.text}
                </div>
                <input 
                    ref='input'
                    type={this.props.type ? this.props.type : 'text'}
                    className='input__input'
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                />
                <div className='input__underline'>
                    
                </div>
                <div className={`input__activeUnderline${this.state.focus ? ' input--showUnderline' : ''}`}>
                    
                </div>
            </div>
        );
    }
     componentDidMount(){
        this.refs.input.onfocus = ()=>{
            this.setState({
                focus: true
            })
        }
        this.refs.input.onblur = ()=>{
            this.setState({
                focus: false
            });
        }
    }
}
 module.exports = Input; 