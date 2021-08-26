import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import Dashboard from './Dashboard';
import Login from './login';
import SignUp from './SignUp'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;