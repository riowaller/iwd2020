import React, { useState, useRef } from 'react';

import Output from '../components/Output'

function Input() {
  const [charArr, setCharArr] = useState([])
  const inputRef=useRef()
  
  function handleInput() {
    setCharArr(inputRef.current.value.split(''))
  }

  function handleDelete(index) {
    const charArrNew = [...charArr]
    charArrNew.splice(index,1)
    setCharArr(charArrNew)
  }

  return (
    <div >
        <label>User Input--->
        <input className="App-label" ref={inputRef} onChange={handleInput} type="text" value={charArr.join('')}  />
        </label>
        <Output click={handleDelete} charArr={charArr}/>
    </div>
  );
}

export default Input;
