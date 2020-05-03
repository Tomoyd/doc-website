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
                    path="/login"
                    component={Login}
                >
                </Route>
                <PrivateRoute path="/"  component={Home} />
            </Switch>
      </Router>
  );
}

function PrivateRoute({children,...rest}) {
    console.log(localStorage.getItem("isAuth"))
    if(!localStorage.getItem("isAuth")){
        return (<Redirect to="/login"/>)
    }
    return(
        <Route
            {...rest}
        >
        </Route>
    )
}
export default App;
