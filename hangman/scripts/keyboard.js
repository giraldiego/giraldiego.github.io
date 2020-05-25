let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
  mergeDisplay: true,
  layoutName: 'default',
  layout: {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'],
    shift: [],

    numbers: [],
  },
  display: {
    '{numbers}': '123',
    '{ent}': 'return',
    '{escape}': 'esc ⎋',
    '{tab}': 'tab ⇥',
    '{backspace}': '⌫',
    '{capslock}': 'caps lock ⇪',
    '{shift}': '⇧',
    '{controlleft}': 'ctrl ⌃',
    '{controlright}': 'ctrl ⌃',
    '{altleft}': 'alt ⌥',
    '{altright}': 'alt ⌥',
    '{metaleft}': 'cmd ⌘',
    '{metaright}': 'cmd ⌘',
    '{abc}': 'ABC',
  },
});

/**
 * Update simple-keyboard when input is changed directly
 */
// document.querySelector('.input').addEventListener('input', (event) => {
//   keyboard.setInput(event.target.value);
// });

function onChange(input) {
  //document.querySelector('.input').value = input.toUpperCase();
  // console.log(input);
  // document.querySelector('.input').value += input
  //   .charAt(input.length - 1)
  //   .toUpperCase();
}

function onKeyPress(button) {
  checkKey(button);
}

function handleShift() {}

function handleNumbers() {}
