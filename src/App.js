import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
const App = () => {
  const[{user} ,dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })

  },[])
  return (
    <div>
       
      <Router>
          
        <Switch>
        <Route path="/login"exact>
           
           <Login />
         </Route>
          <Route path="/"exact>
           <Header />
            <Home />
          </Route>
          <Route path="/checkout" exact>
          <Header />
            <Checkout/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
