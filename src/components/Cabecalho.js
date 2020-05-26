import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { valueAction, valueActionReboot } from '../Reducers/actions/actionValue';

export default function Cabecalho() {

  const valor = useSelector((state) => {return state.value});
  const dispatch = useDispatch();

  function handleChange() {
    let element = document.getElementById('count');
    dispatch(valueActionReboot());
    return Number(element.value);
  }

  return (
    <div>
      <h1>Quantidade: {valor}</h1>
      <label htmlFor="count">Defina a quantidade para [incremento ou decremento]</label>
      <input 
        type="number" 
        name="count" 
        id="count" 
        onChange={() => {
          dispatch(
            valueAction(handleChange())
            )
          }
        } />
    </div>
  );
}