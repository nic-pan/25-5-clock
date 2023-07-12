import Setup from "./Setup";
import React from'react';

const TimerSettings = () => {
    return <div>
        <Setup action="break" time={5}/>
        <Setup action="session" time={25}/>
    </div>
}
export default TimerSettings;