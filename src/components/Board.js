import React from 'react';
import Field from './Field';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from([...Array(49).keys()].map(x => ++x)),
    };
  }

  handleClick(i) {
    const numbers = this.state.numbers.slice();

    numbers[i] = 'X';
    this.setState({
      numbers: numbers,
    });
  }

  renderField(i) {
    return (
      <Field 
        value={this.state.numbers[i]}
        onClick={() => this.handleClick(i)}
      />
    )  
    ;
  }

  render() {
    const fields = this.state.numbers.map((number, index) =>
      <div 
        className="{field}"
        key={index.toString()}
      >
        {this.renderField(index)}
      </div>
    );
    
    return (
      <div className="board">
        {fields}
      </div>
    );
  }
}

export default Board;