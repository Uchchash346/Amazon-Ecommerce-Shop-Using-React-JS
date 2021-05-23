import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will omly run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser) {
        // the user just logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
            <h1>Login Page</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
