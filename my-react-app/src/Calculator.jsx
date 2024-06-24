// src/Calculator.jsx
//disable esllint
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [lastResult, setLastResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input); // Use eval carefully
        setResult(evalResult);
        setLastResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
      setLastResult('');
    } else if (value === 'Ans') {
      setInput(input + lastResult);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
        <div className="text-right text-2xl p-2 bg-black text-white rounded-t-lg">{input || '0'}</div>
        <div className="text-right text-3xl p-2 bg-black text-white mb-2">{result}</div>
        <div className="grid grid-cols-4 gap-3">
          {['AC', 'Ans', '/', '*', '-', 7, 8, 9, '+', 4, 5, 6, '=', 1, 2, 3, '.', 0].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value.toString())}
              className={`p-4 text-2xl bg-gray-500 hover:bg-gray-700 text-white rounded ${value === '=' ? 'col-span-2' : ''}`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
