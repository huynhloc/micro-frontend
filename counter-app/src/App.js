import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  static propTypes = {
    onCountUpdate: PropTypes.func,
    initCount: PropTypes.number,
    title: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initCount || 0,
    };
  }
  updateCount = val => () => {
    const { onCountUpdate } = this.props;
    this.setState(state => {
      const newCount = state.count + val;
      return { count: newCount };
    },
      () => onCountUpdate && onCountUpdate(this.state.count)
    );
  }

  render() {
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div className="App">
        <h3>{title}</h3>
        <div>
          <button onClick={this.updateCount(-1)}>-</button>
          <span> {count} </span>
          <button onClick={this.updateCount(1)}>+</button>
        </div>        
      </div>
    );    
  }
}

export default App;
