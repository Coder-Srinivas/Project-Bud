import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const { isLoading } = useAuth0();
if (isLoading) return <div className="loading"><h2><FontAwesomeIcon icon={faSpinner} className="fa-spin"/></h2><h2>Loading...</h2></div>
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

