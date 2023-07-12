import { useState } from 'react';
import './App.css';
import Timer from './Timer';
import TimerSettings from './TimerSettings';
import TimerControls from './TimerControls';

function App() {
  const {mode, setMode} = useState(null);

  return (
    <div className="App">
      <TimerSettings/>
      <Timer run={true} duration={25*60} mode={mode}/>
      <TimerControls/>
    </div>
  );
}

export default App;
