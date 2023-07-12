import { useState } from "react";
import { Button } from "react-bootstrap";

const TimerControls = (props) => {
    const { isRunning, setIsRunning } = useState(false);

    return <div>
        <Button id="start_stop">
            <i className={`bi ${isRunning ? 'bi-pause-fill' : 'bi-play-fill' }`}></i>
        </Button>
        <Button id="reset">
            <i className="bi bi-arrow-clockwise"></i>
        </Button>
    </div>
}

export default TimerControls;