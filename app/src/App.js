import React, {useState} from 'react';
import './App.css';
import CalendarContainer from './components/CalendarContainer';
import DayButtonsContainer from './components/DayButtonsContainer';

const App = () => {
  const [date, setDate] = useState(new Date().toString())
  const [days, setDays] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CalendarContainer date={date} setDate={setDate} />
      <DayButtonsContainer setDays={setDays} />
      <h1> {date}</h1>
      <h1> {days} </h1>
    </div>
  );
}

export default App;
