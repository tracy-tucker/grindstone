import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import Dashboard from './Dashboard';
import Login from './login';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
