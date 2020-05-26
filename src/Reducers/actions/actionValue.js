export function valueAction(value) {
  return {
    type: 'DEFAULT',
    payload: value
    || 0
  }
}

export function valueActionReboot() {
  return {
    type: 'REBOOT',
    payload: 0
  }
}