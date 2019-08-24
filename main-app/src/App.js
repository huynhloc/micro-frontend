import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  componentDidMount() {
    window.ReactCounter.mount({title: this.state.title, initCount: 10}, 'counter-app');
    window.ReactCounter.mount({title: 'Counter App 2'}, 'counter-app2');
  }
  componentDidUpdate(prevProps, prevState) {
    const { title } = this.state;
    if (prevState.title !== title) {
      window.ReactCounter.mount({ title }, 'counter-app');
    }
  }

  componentWillUnmount() {
    window.ReactCounter.unmount('counter-app');
    window.ReactCounter.unmount('counter-app2');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div id="counter-app"/>
          <div id="counter-app2"/>
          <input value={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
        </header>
      </div>
    );
  }
}

export default App;
