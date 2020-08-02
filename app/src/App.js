import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

const App = () => {
  const [value, setValue] = useState(new Date())

  const handleChange = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Calendar 
        onchange={handleChange}
      />
      <h1>{inputs.date}</h1>
    </div>
  );
}

export default App;
