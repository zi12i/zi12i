import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  const nameChange = (e) => {
    setName(e.target.value);
  }
  const valueChange1 = (e) => {
    setNumber1(e.target.value);
  }
  const valueChange2 = (e) => {
    setNumber2(e.target.value);
  }
  const symbolChange = (e) => {
    setSymbol(e.target.value);
  }

  return (
    <div>
      <p>이름을 입력하세요 <input onChange={nameChange}></input></p>
      <h1>{name} 하이!</h1>
      <p>계산기</p>
      <input type="number" onChange={valueChange1}></input>
      <select onChange={symbolChange}>
		    <option value="+">+</option>
		    <option value="-">-</option>
		    <option value="*">*</option>
		    <option value="/">/</option>
	    </select>
      <input type="number" onChange={valueChange2}></input>

      <p> =
      {(() => {
        switch (symbol) {
          case "+":   return parseInt(number1) + parseInt(number2);
          case "-": return number1 - number2;
          case "*": return number1 * number2;
          case "/":  return number1 / number2;
          default:      return 0;
        }
      })()}
      </p>
    </div>
    
  );
}

export default Calculator;