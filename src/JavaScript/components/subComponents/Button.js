const React = require('react');
 class Button extends React.Component{
     constructor(props){
        super(props)
    }
     render(){
        return (
            <button onClick={this.props.onClick} className='button'>{this.props.text}</button>
        );
    }
 }
 module.exports = Button; 