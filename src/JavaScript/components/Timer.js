const React = require('react');
const {connect} = require('react-redux');

class Timer extends React.Component{

    constructor(props){
        super(props)
        let seconds = this.props.seconds || 8;
        this.state = {
            seconds
        }
        this.interval = null;
    }

    render(){
        return (
            <div className='timer'>
                {this.state.seconds}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState){
        
        if(prevProps.timeIsUp != this.props.timeIsUp || this.props.isPaused != prevProps.isPaused){
            if(this.props.isPaused || this.props.timeIsUp){
                clearInterval(this.interval);
            }else{
                let seconds = this.props.seconds;
                this.setState({
                    seconds
                })
                this.setTimer();
            }
        }

            
        
    }

    componentDidMount(){
        if(!this.props.isPaused){
            this.setTimer();
        }
    }

    setTimer(){
        clearInterval(this.interval);
        this.interval = setInterval(()=>{
            let currentSeconds = this.state.seconds;
            if(currentSeconds == 0){
                // Time is up
                clearInterval(this.interval);
                this.props.dispatch({
                    type: 'TIME_IS_UP'
                })
                return;
            }
            this.setState({
                seconds: currentSeconds-1
            })
            
        },1000)
    }

}

module.exports = connect((state)=>{
    return {
        isPaused: state.question.isPaused,
        timeIsUp: state.question.timeIsUp
    }
})(Timer);