import { Button } from "react-bootstrap";

const TimerControls = (props) => {

    return <div style={{margin: '40px', display: 'flex', justifyContent: 'center'}}>
        <Button variant={props.isRunning ? 'warning' : 'primary'} id="start_stop" onClick={props.isRunning ? props.stopTimer : props.startTimer} style={{margin: '5px'}}>
            <i className={`bi ${props.isRunning ? 'bi-pause-fill' : 'bi-play-fill' }`}></i>
        </Button>
        <Button variant="info" id="reset" onClick={props.resetTimer} style={{margin: '5px'}}>
            <i className="bi bi-arrow-clockwise"></i>
        </Button>
    </div>
}

export default TimerControls;