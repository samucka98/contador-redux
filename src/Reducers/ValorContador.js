export default function ValorContador(state = 0, action) {
  switch (action.type) {
    case 'DEFAULT':
      return state + action.payload;

      default:
        return state;
  }
}