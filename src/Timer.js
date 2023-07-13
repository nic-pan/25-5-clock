import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { capitalizeFirstLetter } from './utils'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Timer = (props) => {
  const theme = useContext(ThemeContext);
  const colors = [theme]; 

  const timerDisplay = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    let seconds = remainingTime % 60
    if (seconds < 10) seconds = `0${seconds}`;

    return <div>
      <h2>{capitalizeFirstLetter(props.mode)}</h2>
      <h3>
        {`${minutes}:${seconds}`}
      </h3>
    </div>
  } 

  return <div style={{display: 'flex', justifyContent: 'center'}}>
          <CountdownCircleTimer
            key={props.updateKey}
            isPlaying={props.run}
            isSmoothColorTransition={true}
            duration={props.duration * 60}
            colors={colors}
            id="time-left"
            size={220}
            onComplete={props.onComplete}
          >
            { timerDisplay }
          </CountdownCircleTimer>
  </div>
}

export default Timer;