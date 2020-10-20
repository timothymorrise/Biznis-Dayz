import React, { useState } from 'react';
import './App.css';
import CalendarContainer from './components/CalendarContainer';
import DateDisplay from "./components/DateDisplay";
import DayButtons from './components/DayButtons';
import NextBiznisDayDisplay from './components/NextBiznisDay';
import TimesContainer from './components/TimesContainer';

const App = () => {
  const [date, setDate] = useState(new Date().toString())
  const [days, setDays] = useState(null)

  const showDisplay = () => {
    if (days) {
      return <div>
        <NextBiznisDayDisplay date={date} days={days} />
      </div>
    }
  }

  const showDays = () => {
    if (days) {
      return <div>
        <h1>+ {days} business days</h1>
      </div>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Biznis Days</h1>
      </header>
      <section>
        <div className="top-section">
          <DateDisplay />
        </div>
        <div className="top-section">
          {showDays()}
        </div>
        <div className="top-section"></div>
      </section>
      <section>
        <div id="calendar-section" className="mid-section">
          <CalendarContainer date={date} setDate={setDate} />
        </div>
        <div id="buttons-section" className="mid-section">
          <DayButtons setDays={setDays} days={days} />
        </div>
        <div id="display-section" className="mid-section" >
          {showDisplay()}
        </div>
      </section>
      <section id="times-section">
        <TimesContainer /> 
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
