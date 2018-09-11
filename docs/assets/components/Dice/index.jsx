import React from "react";

const getRandom = max =>
  Math.floor(Math.random() * (Math.floor(max + 1) - Math.ceil(1))) +
  Math.ceil(1);

export default class Dice extends React.Component {
  constructor() {
    super();

    this.state = {
      diceTable: [4, 6, 8, 10, 12, 20, 100],
      rolls: [],
      total: 0
    };

    this.roll = this.roll.bind(this);
    this.reset = this.reset.bind(this);
  }

  roll({ target }) {
    const val = parseInt(target.value, 10);
    const total = this.state.total + getRandom(val);
    const rolls = [...this.state.rolls];

    rolls.push(`1d${val}`);

    this.setState({ total, rolls });
  }

  reset() {
    this.setState({
      total: 0,
      rolls: []
    });
  }

  render() {
    return (
      <div className="Dice">
        <div className="Dice__options">
          {this.state.diceTable.map(item => (
            <button
              key={item}
              className="Dice__option"
              value={item}
              onClick={this.roll}
            >
              1d{item}
            </button>
          ))}
        </div>
        <div className="Dice__results">
          <ol className="Dice__rolls">
            {this.state.rolls.map(roll => <li>{roll}</li>)}
          </ol>
          <div className="Dice__totals">
            <h1 className="Dice__total">{this.state.total}</h1>
            <button className="Dice__reset" onClick={this.reset}>
              Clear all rolls
            </button>
          </div>
        </div>
      </div>
    );
  }
}
