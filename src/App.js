import React  from 'react';
import './App.css';
import Courses from './components/Courses';

const App = () => {
  return (
    <div className="dashboard">
      
      <div className="divider"></div>
      <Courses />
    </div>
  );
}

export default App;
