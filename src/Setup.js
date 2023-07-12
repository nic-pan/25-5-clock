import { useState } from "react";
import { Button } from "react-bootstrap";

const Setup = (props) => {
    let {time, setTime} = useState(props.time);

    const increment = () => {
        setTime(time++);
    }
    const decrement = () => {
        setTime(time--);
    }

    return <div>
        <label id={`${props.action}-label`}>{props.action} Length</label>
        <div className="">
            <Button id={`${props.action}-increment`} onClick={increment}>
                <i className="bi bi-arrow-up-circle-fill"></i>
            </Button>
            <span id={`${props.action}-length`}>{time}</span>
            <Button id={`${props.action}-decrement`} onClick={decrement}>
                <i className="bi bi-arrow-down-circle-fill"></i>
            </Button>
        </div>
    </div>
}

export default Setup;