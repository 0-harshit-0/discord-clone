import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {Content} from "./first.js";
import './index.css';
import './rindex.css';

class App extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    return (
      <>
      <main>
        <Content />
      </main>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
