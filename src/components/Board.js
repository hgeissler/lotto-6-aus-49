import React from 'react';
import Field from './Field';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from([...Array(49).keys()].map(x => ++x)),
    };
  }

  renderField(i) {
    return (
      <Field 
        value={this.state.numbers[i]}
      />
    )  
    ;
  }

  render() {
    const fields = this.state.numbers.map((number, index) =>
      <div 
        className="field"
        key={number.toString()}
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