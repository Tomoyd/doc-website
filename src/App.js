import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
function App(props) {
  return (
      <Router>
            <Switch>
                <Route
                    path="/react-manage-app/build/login"
                    component={Login}
                >
                </Route>
                <PrivateRoute path="/react-manage-app/build/"  component={Home} />
                <PrivateRoute path="/"  component={Home} />
            </Switch>
      </Router>
  );
}

function PrivateRoute({children,...rest}) {
    console.log(localStorage.getItem("isAuth"))
    if(!localStorage.getItem("isAuth")){
        return (<Redirect to="/react-manage-app/build/login"/>)
    }
    return(
        <Route
            {...rest}
        >
        </Route>
    )
}
export default App;
