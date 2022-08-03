import React, {useState, useEffect} from 'react';
import classes from './App.module.css';
import LandingPage from './Containers/Landing page/landingPage';
import EmployeeForm from './Components/Add Employee/addEmployee';
import AuthModal from './Components/authModal/authModal';

const App = () => {
  
  return (
    <div className="App">
      <EmployeeForm />
    </div>
  );
}

export default App;
