import React from 'react';
import { createStore, combineReducers } from 'redux';
import contadorReducer from './Reducers/ContadorReducers';
import valorContador from './Reducers/ValorContador';
import { Provider } from 'react-redux';

import Cabecalho from './components/Cabecalho';
import Contador from './components/Contador';


function App() {

  const allReducers = combineReducers({counter: contadorReducer, value: valorContador})
  const store = createStore(allReducers)

  return (
    <div className='container'>
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>
  );
}

export default App;
