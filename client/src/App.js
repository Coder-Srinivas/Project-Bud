import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { login } from "./services/login.service";
import Listen from "./components/Listen";

export default function App() {
  const { user, isLoading } = useAuth0();
  if (user) {
    login(user);
    console.log(user);
  }
  if (isLoading)
    return (
      <div className="loading">
        <h2>
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        </h2>
        <h2>Loading...</h2>
      </div>
    );
  return (
    <div className="app">
      <Listen />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Dashboard} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </Router>
    </div>
  );
}
