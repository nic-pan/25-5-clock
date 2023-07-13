import React, { useReducer } from 'react';
import './App.css';
import Timer from './Timer';
import TimerSettings from './TimerSettings';
import TimerControls from './TimerControls';
import { types, modes } from './constants';
import ThemeContext from './ThemeContext';

const sound = require('./audio/magic.mp3')

const timerReducer = (state, action) => {
  switch(action.type) {
    case types.START:
      return {
        ...state,
        isRunning: true
      }
    case types.STOP:
      return {
        ...state,
        isRunning: false
      }
    case types.RESET:
      return {
        ...state,
        key: state.key + 1,
        isRunning: false
      }
    case types.INCREMENT: {
      if (action.mode == modes.SESSION) {
        return {
          ...state,
          key: state.key + 1,
          sessionDuration: state.sessionDuration+1
        }
      } else if (action.mode == modes.BREAK) {
        return {
          ...state,
          key: state.key + 1,
          breakDuration: state.breakDuration+1
        }
      }
    }
    case types.DECREMENT: {
      if (action.mode == modes.SESSION) {
        return {
          ...state,
          key: state.key + 1,
          sessionDuration: Math.ceil(state.sessionDuration)-1
        }
      } else if (action.mode == modes.BREAK) {
        return {
          ...state,
          key: state.key + 1,
          breakDuration: Math.ceil(state.breakDuration)-1
        }
      }
    }
    case types.COMPLETE: {
      const nextMode = state.mode === modes.SESSION ? modes.BREAK : modes.SESSION;
      return {
        ...state,
        mode: nextMode,
      }
    }
    default: break;
  }
  throw Error('Unknown action: ' + action.type);
}

const App = () => {
  const [state, dispatch] = useReducer(timerReducer, 
    {
      type: types.STOP, 
      mode: modes.SESSION, 
      isRunning: false, 
      key: 0,
      sessionDuration:25,
      breakDuration:5
    })

  const audio = React.createRef();

  const startTimer = () => {
    dispatch({type: types.START});
  }
  const stopTimer = () => {
    dispatch({type: types.STOP});
  }
  const resetTimer = () => {
    dispatch({type: types.RESET})
  }
  const updateSessionDuration = (type) => {
    if (!state.isRunning) dispatch({type, mode: modes.SESSION});
  }
  const updateBreakDuration = (type) => {
    if (!state.isRunning) dispatch({type, mode: modes.BREAK})
  }
  const onTimerCompleted = () => {
    audio.current.play();
    dispatch({type: types.COMPLETE})
  }

  return (
    <ThemeContext.Provider value={state.mode === modes.SESSION ? '#B66F79' : '#004B75'}>
      <div className="App">
          <audio ref={audio} id="beep" className="clip" src={sound}></audio>
          <h1>25 + 5 Clock</h1>
          <TimerSettings 
            breakDuration={state.breakDuration} 
            sessionDuration={state.sessionDuration} 
            updateSessionDuration={updateSessionDuration} 
            updateBreakDuration={updateBreakDuration} 
            isRunning={state.isRunning}/>
          <Timer
            updateKey={state.key}
            run={state.isRunning}
            onComplete={onTimerCompleted} 
            duration={state.mode == modes.SESSION ? state.sessionDuration : state.breakDuration} 
            mode={state.mode}/>
          <TimerControls 
            isRunning={state.isRunning} 
            resetTimer={resetTimer}
            stopTimer={stopTimer} 
            startTimer={startTimer} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
