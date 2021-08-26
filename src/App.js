import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import Dashboard from './Dashboard';
import Login from './login';
import { AuthProvider } from './Auth';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;