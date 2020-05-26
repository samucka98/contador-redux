export const incrementAction = function(value) {
  return {
    type: 'INCREMENT',
    payload: value
    || 1
  }
}

export const decrementAction = function(value) {
  return {
    type: 'DECREMENT',
    payload: value
    || 1
  }
}