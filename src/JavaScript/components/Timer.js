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
                {this.state.seconds} {this.props.isPaused?'Y':'N'}
            </div>
        );
    }

    componentWillUpdate(){
        console.log("Will update")
    }

    componentDidUpdate(prevProps, prevState){
            
            console.log("ss")
            console.log(prevProps.isPaused, this.props.isPaused)
            if(prevProps.isPaused != this.props.isPaused){
                console.log("salam")
                if(this.props.isPaused){
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
        console.log(this.props,"salam")
        this.props.dispatch({
            type: 'TIME_IS_UP'
        })
    }

    setTimer(){
        this.props.dispatch({
            type: 'TIMER_RESET'
        })
        clearInterval(this.interval);
        // setInterval(()=>{console.log(this.props)},1000)
        // this.interval = setInterval(()=>{
        //     let currentSeconds = this.state.seconds;
        //     if(currentSeconds == 0){
        //         // Time is up
        //         clearInterval(this.interval);
        //         this.props.dispatch({
        //             type: 'TIME_IS_UP'
        //         })
        //         return;
        //     }
        //     this.setState({
        //         seconds: currentSeconds-1
        //     })
            
        // },1000)
    }

}

module.exports = connect((state)=>{
    return {
        isPaused: state.question.isPaused,
        timeIsUp: state.question.timeIsUp
    }
})(Timer);