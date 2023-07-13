import { useContext } from "react";
import { types } from "./constants";
import { capitalizeFirstLetter } from "./utils";
import ThemeContext from "./ThemeContext";

const Setup = (props) => {
    const theme = useContext(ThemeContext);

    const increment = () => {
        if (props.duration < 60) props.updateDuration(types.INCREMENT)
    }
    const decrement = () => {
        if (props.duration > 1) props.updateDuration(types.DECREMENT)
    }

    return <div>
        <label id={`${props.action}-label`}><h5>{capitalizeFirstLetter(props.action)} Length</h5></label>
        <div style={{fontSize: 20}}>
            <a style={{color: theme}} id={`${props.action}-increment`} onClick={increment} disabled={props.isRunning}>
                <i className="bi bi-arrow-up-circle-fill"></i>
            </a>
            <span style={{margin: 'auto 10px'}} id={`${props.action}-length`}>{props.duration}</span>
            <a style={{color: theme}} id={`${props.action}-decrement`} onClick={decrement} disabled={props.isRunning}>
                <i className="bi bi-arrow-down-circle-fill"></i>
            </a>
        </div>
    </div>
}

export default Setup;