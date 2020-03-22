import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Link,Switch,useRouteMatch} from "react-router-dom"
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
                <PrivateRoute path="/" component={Home}/>
                {
                    localStorage.getItem("isAuth") ? "":(<Redirect to="/login"/>)
                }
            </Switch>
      </Router>
  );
}

function PrivateRoute({children,...rest}) {
    return(
        <Route
            {...rest}
            render={()=>{
                return localStorage.getItem("isAuth") ? (<Home/>):(<Redirect to="/login"/>)
            }}
        >
        </Route>
    )
}
export default App;
