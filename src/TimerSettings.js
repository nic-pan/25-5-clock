import Setup from "./Setup";
import React from 'react';

const TimerSettings = (props) => {
    return <div className="row">
        <div className="col-md-6">
            <Setup 
                action="session" 
                duration={props.sessionDuration} 
                updateDuration={props.updateSessionDuration} 
                disabled={props.isRunning} />
        </div>
        <div className="col-md-6">
            <Setup 
                action="break" 
                duration={props.breakDuration} 
                updateDuration={props.updateBreakDuration} 
                disabled={props.isRunning} />
        </div>
    </div>
}
export default TimerSettings;