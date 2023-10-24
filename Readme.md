import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/ResetPassword';
import NotFound from './components/NotFound';

function App() {
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/signup">S'inscrire</Link>
            </li>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
            <li>
              <Link to="/dashboard">Tableau de bord</Link>
            </li>
            <li>
              <Link to="/reset-password">Réinitialiser mot de passe</Link>
            </li>
          </ul>
        </nav>

        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/not-found" component={NotFound} />
      </div>
    </Router>
 );
}

export default App;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
 const [formData, set