import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = (props) => (
  <CountdownCircleTimer
    isPlaying={props.run}
    duration={props.duration}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    id="time-left"
  >
    {props.mode}
    {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`
    }}
  </CountdownCircleTimer>
)

export default Timer;