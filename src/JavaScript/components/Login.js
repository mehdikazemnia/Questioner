const React = require('react');
const {connect} = require('react-redux');
const Input = require('./subComponents/Input');
const Button = require('./subComponents/Button');
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            fullHide: false
        }
    }
    render() {
        return (
            <div ref='login' className={`login${this.props.showLogin ? '' : ' login--hide'}${this.state.fullHide ? ' none' : ''}`}>
            
            <div className='login__box'>
                <h2>
                    Welcome To The Test!
                </h2>
                <div className='login__inputWrapper'>
                    <Input ref='input' isError={this.state.hasError} type='text' placeholder='Enter Your Name Please' />
                </div>
                <div className='login__inputActions'>
                    <Button onClick={this.login.bind(this)} text={`Let's Start!`} />
                </div>
            </div>
         </div>
        );
    }
    login() {
        let input = this.refs.input.refs.input;
        if (input.value.trim() == '') {
            this.setState({
                hasError: true
            })
        } else {
            this.setState({
                hasError: false
            })
            this.props.dispatch({
                type: 'HIDE_LOGIN',
                username: input.value
            });
            input.value = '';
            setTimeout(() => {
                this.setState({
                    fullHide: true
                });
                this.props.dispatch({
                    type: 'START'
                });
            }, 1000)
        }
    }
}
module.exports = connect((state) => {
    return {
        showLogin: state.login.showLogin
    };
})(Login);