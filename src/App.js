import React,{Component} from 'react'
import './App.css';
import Loginpage from './components/Loginpage';
import Productlistingpage from './components/Productlistingpage';
import Signuppage from './components/Signuppage';
import {Redirect, BrowserRouter, Route } from 'react-router-dom'
import './css/styles.css'
class App extends Component
{
  render()
  {
    return(
      <BrowserRouter>
        <Route
          path = '/' exact
          render={props=><Loginpage {...props}/>}
        />
        <Route
          path = '/signup' exact
          render={props=><Signuppage {...props}/>}
        />
        <Route
          path = '/product/details' exact
          render={props=><Productlistingpage {...props}/>}
        />
      </BrowserRouter>
    );
  }
}
export default App;