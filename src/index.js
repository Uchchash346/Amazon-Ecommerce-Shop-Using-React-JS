import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { StateProvider } from './StateProvider';
// // import reducer, { initialState } from './reducer';
// // import { Provider } from "react-redux";
// // import { store } from "./redux/store";
// import { auth } from "./firebase";
// const rootElement = document.getElementById("root");

// auth.onAuthStateChanged((user) => {
//   ReactDOM.render(
//     <React.StrictMode>
//      <StateProvider initialState={initialState} reducer={reducer}>
//      <Provider store={store}>
//        <App />
//    </Provider>
//      </StateProvider>
//    </React.StrictMode>,
//    document.getElementById('root')
//   );
// })
// ReactDOM.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//     <Provider store={store}>
//       <App />
//     </Provider>
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
