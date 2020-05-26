import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementAction, decrementAction } from '../Reducers/actions/actionCounter';

export default function Contador() {

  const contador = useSelector((state) => {return state.counter});
  const valor = useSelector((state) => {return state.value});
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{contador}</h3>
      <button onClick={() => { dispatch(incrementAction(valor) ) }}>+</button>
      <button onClick={() => { dispatch(decrementAction(valor)) }}>-</button>
    </div>
  );
}