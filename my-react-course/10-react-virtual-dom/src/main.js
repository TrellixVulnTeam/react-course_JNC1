import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

const App = () => {

return (
    <Person />
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
