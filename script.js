

const englishBoardLowerCase = [
  [
    { key: '`', code: 'Backquote' },
    { key: '1', code: 'Digit1' },
    { key: '2', code: 'Digit2' },
    { key: '3', code: 'Digit3' },
    { key: '4', code: 'Digit4' },
    { key: '5', code: 'Digit5' },
    { key: '6', code: 'Digit6' },
    { key: '7', code: 'Digit7' },
    { key: '8', code: 'Digit8' },
    { key: '9', code: 'Digit9' },
    { key: '0', code: 'Digit0' },
    { key: '-', code: 'Minus' },
    { key: '=', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],

  [
    { key: 'Tab', code: 'Tab' },
    { key: 'q', code: 'KeyQ' },
    { key: 'w', code: 'KeyW' },
    { key: 'e', code: 'KeyE' },
    { key: 'r', code: 'KeyR' },
    { key: 't', code: 'KeyT' },
    { key: 'y', code: 'KeyY' },
    { key: 'u', code: 'KeyU' },
    { key: 'i', code: 'KeyI' },
    { key: 'o', code: 'KeyO' },
    { key: 'p', code: 'KeyP' },
    { key: '[', code: 'BracketLeft' },
    { key: ']', code: 'BracketRight' },
    { key: '\\', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],

  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'a', code: 'KeyA' },
    { key: 's', code: 'KeyS' },
    { key: 'd', code: 'KeyD' },
    { key: 'f', code: 'KeyF' },
    { key: 'g', code: 'KeyG' },
    { key: 'h', code: 'KeyH' },
    { key: 'j', code: 'KeyJ' },
    { key: 'k', code: 'KeyK' },
    { key: 'l', code: 'KeyL' },
    { key: ';', code: 'Semicolon' },
    { key: "'", code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],

  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'z', code: 'KeyZ' },
    { key: 'x', code: 'KeyX' },
    { key: 'c', code: 'KeyC' },
    { key: 'v', code: 'KeyV' },
    { key: 'b', code: 'KeyB' },
    { key: 'n', code: 'KeyN' },
    { key: 'm', code: 'KeyM' },
    { key: ',', code: 'Comma' },
    { key: '.', code: 'Period' },
    { key: '/', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],

  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
];

const englishBoardShiftUpperCase = [
  [
    { key: '~', code: 'Backquote' },
    { key: '!', code: 'Digit1' },
    { key: '@', code: 'Digit2' },
    { key: '#', code: 'Digit3' },
    { key: '$', code: 'Digit4' },
    { key: '%', code: 'Digit5' },
    { key: '^', code: 'Digit6' },
    { key: '&', code: 'Digit7' },
    { key: '*', code: 'Digit8' },
    { key: '(', code: 'Digit9' },
    { key: ')', code: 'Digit0' },
    { key: '_', code: 'Minus' },
    { key: '+', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],
  [
    { key: 'Tab', code: 'Tab' },
    { key: 'Q', code: 'KeyQ' },
    { key: 'W', code: 'KeyW' },
    { key: 'E', code: 'KeyE' },
    { key: 'R', code: 'KeyR' },
    { key: 'T', code: 'KeyT' },
    { key: 'Y', code: 'KeyY' },
    { key: 'U', code: 'KeyU' },
    { key: 'I', code: 'KeyI' },
    { key: 'O', code: 'KeyO' },
    { key: 'P', code: 'KeyP' },
    { key: '{', code: 'BracketLeft' },
    { key: '}', code: 'BracketRight' },
    { key: '|', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],
  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'A', code: 'KeyA' },
    { key: 'S', code: 'KeyS' },
    { key: 'D', code: 'KeyD' },
    { key: 'F', code: 'KeyF' },
    { key: 'G', code: 'KeyG' },
    { key: 'H', code: 'KeyH' },
    { key: 'J', code: 'KeyJ' },
    { key: 'K', code: 'KeyK' },
    { key: 'L', code: 'KeyL' },
    { key: ':', code: 'Semicolon' },
    { key: '"', code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],
  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'Z', code: 'KeyZ' },
    { key: 'X', code: 'KeyX' },
    { key: 'C', code: 'KeyC' },
    { key: 'V', code: 'KeyV' },
    { key: 'B', code: 'KeyB' },
    { key: 'N', code: 'KeyN' },
    { key: 'M', code: 'KeyM' },
    { key: '<', code: 'Comma' },
    { key: '>', code: 'Period' },
    { key: '?', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],
  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
]

const englishBoardShiftLowerCase = [
  [
    { key: '~', code: 'Backquote' },
    { key: '!', code: 'Digit1' },
    { key: '@', code: 'Digit2' },
    { key: '#', code: 'Digit3' },
    { key: '$', code: 'Digit4' },
    { key: '%', code: 'Digit5' },
    { key: '^', code: 'Digit6' },
    { key: '&', code: 'Digit7' },
    { key: '*', code: 'Digit8' },
    { key: '(', code: 'Digit9' },
    { key: ')', code: 'Digit0' },
    { key: '_', code: 'Minus' },
    { key: '+', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],
  [
    { key: 'Tab', code: 'Tab' },
    { key: 'q', code: 'KeyQ' },
    { key: 'w', code: 'KeyW' },
    { key: 'e', code: 'KeyE' },
    { key: 'r', code: 'KeyR' },
    { key: 't', code: 'KeyT' },
    { key: 'y', code: 'KeyY' },
    { key: 'u', code: 'KeyU' },
    { key: 'i', code: 'KeyI' },
    { key: 'o', code: 'KeyO' },
    { key: 'p', code: 'KeyP' },
    { key: '{', code: 'BracketLeft' },
    { key: '}', code: 'BracketRight' },
    { key: '|', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],
  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'a', code: 'KeyA' },
    { key: 's', code: 'KeyS' },
    { key: 'd', code: 'KeyD' },
    { key: 'f', code: 'KeyF' },
    { key: 'g', code: 'KeyG' },
    { key: 'h', code: 'KeyH' },
    { key: 'j', code: 'KeyJ' },
    { key: 'k', code: 'KeyK' },
    { key: 'l', code: 'KeyL' },
    { key: ':', code: 'Semicolon' },
    { key: '"', code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],
  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'z', code: 'KeyZ' },
    { key: 'x', code: 'KeyX' },
    { key: 'c', code: 'KeyC' },
    { key: 'v', code: 'KeyV' },
    { key: 'b', code: 'KeyB' },
    { key: 'n', code: 'KeyN' },
    { key: 'm', code: 'KeyM' },
    { key: '<', code: 'Comma' },
    { key: '>', code: 'Period' },
    { key: '?', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],
  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
]

const englishBoardUpperCase = [
  [
    { key: '`', code: 'Backquote' },
    { key: '1', code: 'Digit1' },
    { key: '2', code: 'Digit2' },
    { key: '3', code: 'Digit3' },
    { key: '4', code: 'Digit4' },
    { key: '5', code: 'Digit5' },
    { key: '6', code: 'Digit6' },
    { key: '7', code: 'Digit7' },
    { key: '8', code: 'Digit8' },
    { key: '9', code: 'Digit9' },
    { key: '0', code: 'Digit0' },
    { key: '-', code: 'Minus' },
    { key: '=', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],

  [
    { key: 'Tab', code: 'Tab' },
    { key: 'Q', code: 'KeyQ' },
    { key: 'W', code: 'KeyW' },
    { key: 'E', code: 'KeyE' },
    { key: 'R', code: 'KeyR' },
    { key: 'T', code: 'KeyT' },
    { key: 'Y', code: 'KeyY' },
    { key: 'U', code: 'KeyU' },
    { key: 'I', code: 'KeyI' },
    { key: 'O', code: 'KeyO' },
    { key: 'P', code: 'KeyP' },
    { key: '[', code: 'BracketLeft' },
    { key: ']', code: 'BracketRight' },
    { key: '\\', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],
  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'A', code: 'KeyA' },
    { key: 'S', code: 'KeyS' },
    { key: 'D', code: 'KeyD' },
    { key: 'F', code: 'KeyF' },
    { key: 'G', code: 'KeyG' },
    { key: 'H', code: 'KeyH' },
    { key: 'J', code: 'KeyJ' },
    { key: 'K', code: 'KeyK' },
    { key: 'L', code: 'KeyL' },
    { key: ';', code: 'Semicolon' },
    { key: "'", code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],
  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'Z', code: 'KeyZ' },
    { key: 'X', code: 'KeyX' },
    { key: 'C', code: 'KeyC' },
    { key: 'V', code: 'KeyV' },
    { key: 'B', code: 'KeyB' },
    { key: 'N', code: 'KeyN' },
    { key: 'M', code: 'KeyM' },
    { key: ',', code: 'Comma' },
    { key: '.', code: 'Period' },
    { key: '/', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],
  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
]


const russianBoardLowerCase = [
  [
    { key: 'ё', code: 'Backquote' },
    { key: '1', code: 'Digit1' },
    { key: '2', code: 'Digit2' },
    { key: '3', code: 'Digit3' },
    { key: '4', code: 'Digit4' },
    { key: '5', code: 'Digit5' },
    { key: '6', code: 'Digit6' },
    { key: '7', code: 'Digit7' },
    { key: '8', code: 'Digit8' },
    { key: '9', code: 'Digit9' },
    { key: '0', code: 'Digit0' },
    { key: '-', code: 'Minus' },
    { key: '=', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],

  [
    { key: 'Tab', code: 'Tab' },
    { key: 'й', code: 'KeyQ' },
    { key: 'ц', code: 'KeyW' },
    { key: 'у', code: 'KeyE' },
    { key: 'к', code: 'KeyR' },
    { key: 'е', code: 'KeyT' },
    { key: 'н', code: 'KeyY' },
    { key: 'г', code: 'KeyU' },
    { key: 'ш', code: 'KeyI' },
    { key: 'щ', code: 'KeyO' },
    { key: 'з', code: 'KeyP' },
    { key: 'х', code: 'BracketLeft' },
    { key: 'ъ', code: 'BracketRight' },
    { key: '\\', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],

  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'ф', code: 'KeyA' },
    { key: 'ы', code: 'KeyS' },
    { key: 'в', code: 'KeyD' },
    { key: 'а', code: 'KeyF' },
    { key: 'п', code: 'KeyG' },
    { key: 'р', code: 'KeyH' },
    { key: 'о', code: 'KeyJ' },
    { key: 'л', code: 'KeyK' },
    { key: 'д', code: 'KeyL' },
    { key: 'ж', code: 'Semicolon' },
    { key: "э", code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],

  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'я', code: 'KeyZ' },
    { key: 'ч', code: 'KeyX' },
    { key: 'с', code: 'KeyC' },
    { key: 'м', code: 'KeyV' },
    { key: 'и', code: 'KeyB' },
    { key: 'т', code: 'KeyN' },
    { key: 'ь', code: 'KeyM' },
    { key: 'б', code: 'Comma' },
    { key: 'ю', code: 'Period' },
    { key: '.', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],

  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
];

const russianBoardShiftUpperCase = [
  [
    { key: 'Ё', code: 'Backquote' },
    { key: '!', code: 'Digit1' },
    { key: '"', code: 'Digit2' },
    { key: '№', code: 'Digit3' },
    { key: ';', code: 'Digit4' },
    { key: '%', code: 'Digit5' },
    { key: ':', code: 'Digit6' },
    { key: '?', code: 'Digit7' },
    { key: '*', code: 'Digit8' },
    { key: '(', code: 'Digit9' },
    { key: ')', code: 'Digit0' },
    { key: '_', code: 'Minus' },
    { key: '+', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],

  [
    { key: 'Tab', code: 'Tab' },
    { key: 'Й', code: 'KeyQ' },
    { key: 'Ц', code: 'KeyW' },
    { key: 'У', code: 'KeyE' },
    { key: 'К', code: 'KeyR' },
    { key: 'Е', code: 'KeyT' },
    { key: 'Н', code: 'KeyY' },
    { key: 'Г', code: 'KeyU' },
    { key: 'Ш', code: 'KeyI' },
    { key: 'Щ', code: 'KeyO' },
    { key: 'З', code: 'KeyP' },
    { key: 'Х', code: 'BracketLeft' },
    { key: 'Ъ', code: 'BracketRight' },
    { key: '/', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],

  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'Ф', code: 'KeyA' },
    { key: 'Ы', code: 'KeyS' },
    { key: 'В', code: 'KeyD' },
    { key: 'А', code: 'KeyF' },
    { key: 'П', code: 'KeyG' },
    { key: 'Р', code: 'KeyH' },
    { key: 'О', code: 'KeyJ' },
    { key: 'Л', code: 'KeyK' },
    { key: 'Д', code: 'KeyL' },
    { key: 'Ж', code: 'Semicolon' },
    { key: 'Э', code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],

  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'Я', code: 'KeyZ' },
    { key: 'Ч', code: 'KeyX' },
    { key: 'С', code: 'KeyC' },
    { key: 'М', code: 'KeyV' },
    { key: 'И', code: 'KeyB' },
    { key: 'Т', code: 'KeyN' },
    { key: 'Ь', code: 'KeyM' },
    { key: 'Б', code: 'Comma' },
    { key: 'Ю', code: 'Period' },
    { key: ',', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],

  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
];

const russianBoardShiftLowerCase = [
  [
    { key: 'ё', code: 'Backquote' },
    { key: '!', code: 'Digit1' },
    { key: '"', code: 'Digit2' },
    { key: '№', code: 'Digit3' },
    { key: ';', code: 'Digit4' },
    { key: '%', code: 'Digit5' },
    { key: ':', code: 'Digit6' },
    { key: '?', code: 'Digit7' },
    { key: '*', code: 'Digit8' },
    { key: '(', code: 'Digit9' },
    { key: ')', code: 'Digit0' },
    { key: '_', code: 'Minus' },
    { key: '+', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],

  [
    { key: 'Tab', code: 'Tab' },
    { key: 'й', code: 'KeyQ' },
    { key: 'ц', code: 'KeyW' },
    { key: 'у', code: 'KeyE' },
    { key: 'к', code: 'KeyR' },
    { key: 'е', code: 'KeyT' },
    { key: 'н', code: 'KeyY' },
    { key: 'г', code: 'KeyU' },
    { key: 'ш', code: 'KeyI' },
    { key: 'щ', code: 'KeyO' },
    { key: 'з', code: 'KeyP' },
    { key: 'х', code: 'BracketLeft' },
    { key: 'ъ', code: 'BracketRight' },
    { key: '/', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],

  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'ф', code: 'KeyA' },
    { key: 'ы', code: 'KeyS' },
    { key: 'в', code: 'KeyD' },
    { key: 'а', code: 'KeyF' },
    { key: 'п', code: 'KeyG' },
    { key: 'р', code: 'KeyH' },
    { key: 'о', code: 'KeyJ' },
    { key: 'л', code: 'KeyK' },
    { key: 'д', code: 'KeyL' },
    { key: 'ж', code: 'Semicolon' },
    { key: 'э', code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],

  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'я', code: 'KeyZ' },
    { key: 'ч', code: 'KeyX' },
    { key: 'с', code: 'KeyC' },
    { key: 'м', code: 'KeyV' },
    { key: 'и', code: 'KeyB' },
    { key: 'т', code: 'KeyN' },
    { key: 'ь', code: 'KeyM' },
    { key: 'б', code: 'Comma' },
    { key: 'ю', code: 'Period' },
    { key: ',', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],

  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
];

const russianBoardUpperCase = [
  [
    { key: 'Ё', code: 'Backquote' },
    { key: '1', code: 'Digit1' },
    { key: '2', code: 'Digit2' },
    { key: '3', code: 'Digit3' },
    { key: '4', code: 'Digit4' },
    { key: '5', code: 'Digit5' },
    { key: '6', code: 'Digit6' },
    { key: '7', code: 'Digit7' },
    { key: '8', code: 'Digit8' },
    { key: '9', code: 'Digit9' },
    { key: '0', code: 'Digit0' },
    { key: '-', code: 'Minus' },
    { key: '=', code: 'Equal' },
    { key: 'Backspace', code: 'Backspace' },
  ],

  [
    { key: 'Tab', code: 'Tab' },
    { key: 'Й', code: 'KeyQ' },
    { key: 'Ц', code: 'KeyW' },
    { key: 'У', code: 'KeyE' },
    { key: 'К', code: 'KeyR' },
    { key: 'Е', code: 'KeyT' },
    { key: 'Н', code: 'KeyY' },
    { key: 'Г', code: 'KeyU' },
    { key: 'Ш', code: 'KeyI' },
    { key: 'Щ', code: 'KeyO' },
    { key: 'З', code: 'KeyP' },
    { key: 'Х', code: 'BracketLeft' },
    { key: 'Ъ', code: 'BracketRight' },
    { key: '\\', code: 'Backslash' },
    { key: 'Delete', code: 'Delete' },
  ],

  [
    { key: 'CapsLock', code: 'CapsLock' },
    { key: 'Ф', code: 'KeyA' },
    { key: 'Ы', code: 'KeyS' },
    { key: 'В', code: 'KeyD' },
    { key: 'А', code: 'KeyF' },
    { key: 'П', code: 'KeyG' },
    { key: 'Р', code: 'KeyH' },
    { key: 'О', code: 'KeyJ' },
    { key: 'Л', code: 'KeyK' },
    { key: 'Д', code: 'KeyL' },
    { key: 'Ж', code: 'Semicolon' },
    { key: "Э", code: 'Quote' },
    { key: 'Enter', code: 'Enter' },
  ],

  [
    { key: 'Shift', code: 'ShiftLeft' },
    { key: 'Я', code: 'KeyZ' },
    { key: 'Ч', code: 'KeyX' },
    { key: 'С', code: 'KeyC' },
    { key: 'М', code: 'KeyV' },
    { key: 'И', code: 'KeyB' },
    { key: 'Т', code: 'KeyN' },
    { key: 'Ь', code: 'KeyM' },
    { key: 'Б', code: 'Comma' },
    { key: 'Ю', code: 'Period' },
    { key: '.', code: 'Slash' },
    { key: '&uarr;', code: 'ArrowUp' },
    { key: 'Shift', code: 'ShiftRight' },
  ],

  [
    { key: 'Ctrl', code: 'ControlLeft' },
    { key: 'Win', code: 'MetaLeft' },
    { key: 'Alt', code: 'AltLeft' },
    { key: ' ', code: 'Space' },
    { key: 'Alt', code: 'AltRight' },
    { key: '&larr;', code: 'ArrowLeft' },
    { key: '&darr;', code: 'ArrowDown' },
    { key: '&rarr;', code: 'ArrowRight' },
    { key: 'Ctrl', code: 'ControlRight' },
  ],
];





class Board {
 
  createTextArea() {
    const textArea = document.createElement('textarea');
    textArea.className = 'text-area';
    document.body.prepend(textArea);
    return textArea;
  }

  createBoardLines(base) {
    const boardWrapper = document.createElement('div');
    boardWrapper.className = 'board-wrapper';
    this.textArea.after(boardWrapper);
    const boardStringWrapper = [];

    for (let i = 0; i < base.length; i++) {
      boardStringWrapper[i] = document.createElement('div');
      boardStringWrapper[i].className = 'board-wrapper__string';
      boardWrapper.append(boardStringWrapper[i]);
    }

    return boardStringWrapper;
  }

  createBoardButtons(base) {
    const buttons = [];
    for (let i = 0; i < base.length; i++) {

      for (let j = 0; j < base[i].length; j++) {
        const button = document.createElement('button');
        button.className = 'button';
        if (base[i][j].key === ' ' || base[i][j].key === 'Backspace' || base[i][j].key === 'Tab' || base[i][j].key === 'Delete' || base[i][j].key === 'CapsLock' || base[i][j].key === 'Enter' || base[i][j].key === 'Shift' || base[i][j].key === 'Shift') { button.style.flexGrow = 1; }
        button.innerHTML = base[i][j].key;
        button.code = base[i][j].code;
        this.boardStringWrapper[i].append(button);
        buttons.push(button);
        button.addEventListener('click', (event) => {this.printSymbol.apply(this, event)});
        button.addEventListener('click', (event) => {this.changeBoardCase.apply(this, event)});
        button.addEventListener('click', (event) => {this.applyShiftOnClick.apply(this, event)});
      }

    }
    
    return buttons;
  }

  addListeners() {
    window.addEventListener('keydown', (event) => {this.highlightKey.apply(this, event)});
    window.addEventListener('keyup', (event) => {this.abortHighlightKey.apply(this, event)});
    window.addEventListener('keydown', (event) => {this.changeBoard.apply(this, event)});
    window.addEventListener('keydown', (event) => {this.changeBoardCase.apply(this, event)});
    window.addEventListener('keydown', (event) => {this.applyShift.apply(this, event)});
    window.addEventListener('keyup', (event) => {this.ammendShift.apply(this, event)});
  }

  printSymbol() {
    const arr = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt']
    if (!arr.includes(event.target.innerHTML)) {
    this.textArea.focus();
    this.textArea.value += event.target.innerHTML;
    }
  }

  removeBoard() {
    this.boardStringWrapper[0].parentNode.remove();

    for (let elem of this.boardStringWrapper) {
      elem.remove();
    }
  
  }

  highlightKey() {
    this.textArea.focus();

    for (let elem of this.buttons) {
      if (event.code === elem.code) {
        elem.style.backgroundColor = 'orange';
        elem.style.borderRadius = '20px';
      }
    }

  }

  abortHighlightKey() {
    this.textArea.focus();

    for (let elem of this.buttons) {
      if (event.code === elem.code) {
        elem.style.backgroundColor = '';
        elem.style.borderRadius = '';
      }
    }
  }

  changeButtonsNotes(base) {
    let k =0;
     
    for (let i = 0; i < base.length; i++) {
      for (let j = 0; j < base[i].length; j++) {
       this.buttons[k].innerHTML = base[i][j].key;
       k++;
      }     
    }

  }

  changeBoard() {
    if(event.code === 'AltLeft' && event.ctrlKey ) {

      switch (localStorage.getItem('lang-mode')) {
        case 'rus-lower':
          this.changeButtonsNotes(englishBoardLowerCase);
          localStorage.setItem('lang-mode', 'eng-lower');
          break;
        case 'rus-upper':
          this.changeButtonsNotes(englishBoardUpperCase);
          localStorage.setItem('lang-mode', 'eng-upper');
          break;
        case 'eng-lower':
          this.changeButtonsNotes(russianBoardLowerCase);
          localStorage.setItem('lang-mode', 'rus-lower');
          break;
        case 'eng-upper':
          this.changeButtonsNotes(russianBoardUpperCase);
          localStorage.setItem('lang-mode', 'rus-upper');
          break;
      
        default:
          break;
      }
      
    }
  }

  changeBoardCase() {
    if(event.code === 'CapsLock' || event.target.innerHTML === 'CapsLock' ) {
      switch (localStorage.getItem('lang-mode')) {
        case 'rus-lower':
          this.changeButtonsNotes(russianBoardUpperCase);
          localStorage.setItem('lang-mode', 'rus-upper');
          break;
        case 'rus-upper':
          this.changeButtonsNotes(russianBoardLowerCase);
          localStorage.setItem('lang-mode', 'rus-lower');
          break;
        case 'eng-lower':
          this.changeButtonsNotes(englishBoardUpperCase);
          localStorage.setItem('lang-mode', 'eng-upper');
          break;
        case 'eng-upper':
          this.changeButtonsNotes(englishBoardLowerCase);
          localStorage.setItem('lang-mode', 'eng-lower');
          break;
      
        default:
          break;
      }
      
    }
  }

  applyShift() {
    if(event.code === 'ShiftLeft' || event.code === 'ShiftRight' ) {
      switch (localStorage.getItem('lang-mode')) {
      
        case 'rus-lower':
          this.changeButtonsNotes(russianBoardShiftUpperCase);
          break;
        case 'rus-upper':
          this.changeButtonsNotes(russianBoardShiftLowerCase);
          break;
        case 'eng-lower':
          this.changeButtonsNotes(englishBoardShiftUpperCase);
          break;
        case 'eng-upper':
          this.changeButtonsNotes(englishBoardShiftLowerCase);
          break;
      
        default:
          break;
      }
      
    }
  }

  ammendShift() {
    if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {

      switch (localStorage.getItem('lang-mode')) {
        case 'rus-lower':
          this.changeButtonsNotes(russianBoardLowerCase);
          localStorage.setItem('lang-mode', 'rus-lower');
          break;
        case 'rus-upper':
          this.changeButtonsNotes(russianBoardUpperCase);
          localStorage.setItem('lang-mode', 'rus-upper');
          break;
        case 'eng-lower':
          this.changeButtonsNotes(englishBoardLowerCase);
          localStorage.setItem('lang-mode', 'eng-lower');
          break;
        case 'eng-upper':
          this.changeButtonsNotes(englishBoardUpperCase);
          localStorage.setItem('lang-mode', 'eng-upper');
          break;
      
        default:
          break;
      }
      
    }
  }

  applyShiftOnClick() {
    if (event.target.innerHTML === 'Shift') {
      switch (localStorage.getItem('lang-mode')) {
      
        case 'rus-lower':
          this.changeButtonsNotes(russianBoardShiftUpperCase);
          break;
        case 'rus-upper':
          this.changeButtonsNotes(russianBoardShiftLowerCase);
          break;
        case 'eng-lower':
          this.changeButtonsNotes(englishBoardShiftUpperCase);
          break;
        case 'eng-upper':
          this.changeButtonsNotes(englishBoardShiftLowerCase);
          break;
      
        default:
          break;
      }

      setTimeout( () => {
        switch (localStorage.getItem('lang-mode')) {
          case 'rus-lower':
            this.changeButtonsNotes(russianBoardLowerCase);
            localStorage.setItem('lang-mode', 'rus-lower');
            break;
          case 'rus-upper':
            this.changeButtonsNotes(russianBoardUpperCase);
            localStorage.setItem('lang-mode', 'rus-upper');
            break;
          case 'eng-lower':
            this.changeButtonsNotes(englishBoardLowerCase);
            localStorage.setItem('lang-mode', 'eng-lower');
            break;
          case 'eng-upper':
            this.changeButtonsNotes(englishBoardUpperCase);
            localStorage.setItem('lang-mode', 'eng-upper');
            break;
        
          default:
            break;
        }
      }, 1000);
    }
  
  }    
}

const board = new Board();
board.textArea = board.createTextArea();
if (!localStorage.getItem('lang-mode')) {localStorage.setItem('lang-mode', 'eng-lower')};
let stor = localStorage.getItem('lang-mode');
let langMode;
switch (stor) {
  case 'rus-lower':
    langMode = russianBoardLowerCase;
    break;
  case 'rus-upper':
    langMode = russianBoardUpperCase;
    break;
  case 'eng-lower':
    langMode = englishBoardLowerCase;
    break;
  case 'eng-upper':
    langMode = englishBoardUpperCase;
    break;

  default:
    break;
}

board.boardStringWrapper = board.createBoardLines(langMode);
board.buttons = board.createBoardButtons(langMode);
board.addListeners();




