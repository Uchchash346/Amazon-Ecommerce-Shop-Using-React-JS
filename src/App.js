import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import { useEffect } from 'react';
// import { useStateValue } from './StateProvider';
// import { setUser } from "./redux/actions/actions";
// import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51IeDaULWA4NMH0y0aMPnBFIMXFPGgiNA40Gx171danbeK2gZfIBxWM8z5wkyu3RoI1ikU6WM2BwKbIBjXO9cBGgN00AwWak5Lp')
function App() {
  // const dispatch = useDispatch();
  const [{ }, dispatch] = useStateValue();
  
  useEffect(() => {
    //will only run once when the app component loads....
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

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => { 
  //     if (user) {
  //       dispatch(setUser(user));
  //     } else {
  //       dispatch(setUser(null));
  //     }
  //   });

  //   return () => unsubscribe();
  //   //will omly run once when the app component loads....
  //   // auth.onAuthStateChanged(authUser => {
  //   //   console.log('The user is >>>', authUser);
  //   //   if (authUser) {
  //   //     // the user just logged in 
  //   //     dispatch({
  //   //       type: 'SET_USER',
  //   //       user: authUser
  //   //     })
  //   //   } else {
  //   //     // the user is not logged in
  //   //     dispatch({
  //   //       type: 'SET_USER',
  //   //       user: null
  //   //     })
  //   //   }
  //   // })
  // }, [])
  return (
    <Router>

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
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
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
