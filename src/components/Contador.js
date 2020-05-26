import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementAction, decrementAction } from '../Reducers/actions/actionCounter';

export default function Contador() {

  const contador = useSelector((state) => {return state.counter});
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{contador}</h3>
      <button onClick={() => { dispatch(incrementAction(2) ) }}>+</button>
      <button onClick={() => { dispatch(decrementAction(2)) }}>-</button>
    </div>
  );
}