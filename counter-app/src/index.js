import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.ReactCounter = {
  mount: (props, container) => {
      const el = document.getElementById(container);
  ReactDOM.render(<App {...props}/>, el);
  },
  unmount: (container) => {
      const el = document.getElementById(container);
      ReactDOM.unmountComponentAtNode(el);
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
