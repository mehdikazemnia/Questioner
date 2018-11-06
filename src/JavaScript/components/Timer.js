const React = require('react');

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
        if(prevState.seconds == this.state.seconds){
            // props changed
            let seconds = this.props.seconds;
            this.setState({
                seconds
            })
            if(prevProps.isPaused != this.props.isPaused){
                if(!this.props.isPaused){
                    this.setTimer();
                }
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
                clearInterval(this.interval);
                return;
            }
            this.setState({
                seconds: currentSeconds-1
            })
            
        },1000)
    }

}

module.exports = Timer;