import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DisplayCard from "./Components/displayCard/DisplayCard";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import Login from "./Components/login/Login";
import ReadNow from "./Components/ReadNow/ReadNow";
import Register from "./Components/register/Register";
import PrivateRoute from "./PrivateRoute";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={DisplayCard} />
            <PrivateRoute path='/readnow' component={ReadNow} />
          </Switch>
          <Footer />
        </Router>

      </>
    )
  }

}
export default App;
