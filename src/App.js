import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';


const App = () => {
  return (
    <div className="form-container">
      <h1>Form Validation App</h1>
      <Form />
    </div>
  );
};

export default App;