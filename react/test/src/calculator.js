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

  return (
    <div>
      <p>이름을 입력하세요!</p>
      <input onChange={nameChange}></input>
      <h3>{name} 하이!</h3>
      <input type="number" onChange={valueChange1}></input>
      <select>
		    <option value="+">+</option>
		    <option value="-">-</option>
		    <option value="*">*</option>
		    <option value="/">/</option>
	    </select>
      <input type="number" onChange={valueChange2}></input>
    </div>
    
  );
}

export default Calculator;