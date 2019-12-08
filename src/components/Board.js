import React from 'react';
import Field from './Field';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Array von 1 bis 49
      numbers: Array.from([...Array(49).keys()].map(x => ++x)),
      selectedNumbers: [],
      buttonClass: 'buttonHidden',
    };
  }

  handleClick(i) {
    const numbers = this.state.numbers.slice();
    let selectedNumbers = this.state.selectedNumbers.slice();
    
    if (selectedNumbers.length < 6 && numbers[i] !== 'X') {
      // X setzen
      selectedNumbers = selectedNumbers.concat(numbers[i]);
      numbers[i] = 'X';
    } else {
      // X mit der Zahl ersetzen bei erneutem Klick auf das Feld
      numbers[i] = i+1;
      let index = selectedNumbers.indexOf(numbers[i])
      if (index >= 0) {
        selectedNumbers.splice(index, 1);
      }

      this.setState({
        buttonClass: 'buttonHidden'
      })
    }

    // Button anzeigen
    if (selectedNumbers.length === 6) {
      this.setState({
        buttonClass: 'button'
      })
    } 
      
    
    this.setState({
      numbers: numbers,
      selectedNumbers: selectedNumbers,
    });
  }

  displayNumbers() {
    let numbers = this.state.selectedNumbers.slice();
    // Sortiert selectedNumbers-Array
    numbers.sort(function(a, b){return a-b});
    alert(numbers)
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
      <div>
        <div className="allFields">
          {fields}
        </div>
        <button 
          className={this.state.buttonClass}
          onClick={() => this.displayNumbers()}
        >
          WEITER
        </button>
      </div>
    );
  }
}

export default Board;