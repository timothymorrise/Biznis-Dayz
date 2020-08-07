import React, {useState} from 'react';
import './App.css';
import CalendarContainer from './components/CalendarContainer';


const App = () => {
  const [values, setValue] = useState({date: new Date(), bidnessDays: 0})


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CalendarContainer date={values.date} />
      <h1>{values.date}</h1>
    </div>
  );
}

export default App;
