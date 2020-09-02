import React, { useState } from 'react';
import './App.css';
import CalendarContainer from './components/CalendarContainer';
import DateDisplay from "./components/DateDisplay";
import DayButtons from './components/DayButtons';
import NextBiznisDayDisplay from './components/NextBiznisDay';
import holidays from "./components/NextBiznisDay/holidays"

const App = () => {
  const [date, setDate] = useState(new Date().toString())
  const [days, setDays] = useState(null)

  const showDisplay = () => {
    if (days) {
      return <div>
        <p>+ {days}</p>
        <NextBiznisDayDisplay date={date} days={days} />
      </div>
    }
  }

  const showmedates = () => {
    return <div>
      {holidays.toString()}
    </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Biznis Days</h1>
      </header>
      <section>
        <div id="calendar-section">
          <CalendarContainer date={date} setDate={setDate} />
        </div>
        <div id="buttons-section">
          <DayButtons setDays={setDays} />
        </div>
        <div id="biznis-day-section">
          <DateDisplay date={date} />
        </div>
      </section>
      {holidays.toString()}
      <section>
      </section>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
