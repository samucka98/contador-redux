export function valueAction(value) {
  return {
    type: 'DEFAULT',
    payload: value
    || 0
  }
}