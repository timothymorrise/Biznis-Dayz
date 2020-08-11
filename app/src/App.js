import React, {useState} from 'react';
import './App.css';
import CalendarContainer from './components/CalendarContainer';


const App = () => {
  const [date, setDate] = useState(new Date().toString())

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CalendarContainer date={date} setDate={setDate} />
      <h1> {date}</h1>
    </div>
  );
}

export default App;
