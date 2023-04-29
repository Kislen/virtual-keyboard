
/*let engBoard = [];
document.addEventListener("keydown", (event) => {
    let k = {};
    k.key = event.key;
    // eslint-disable-next-line linebreak-style
    k.code = event.code;
    if (k.code === "MetaLeft") { k.key ="Win"};
    if (k.code === "ControlLeft" || k.code === "ControlRight") { k.key ="Ctrl"};
    engBoard.push(k);
    if (k.key === 'Shift') {engBoard.pop()}
    console.log(engBoard);
}) */
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

const englishBoardShiftCase = [
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



class Board {
  textArea= null;
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
      }

    }
    window.addEventListener('keydown', (event) => {this.highlightKey.apply(this, event)});
    window.addEventListener('keyup', (event) => {this.abortHighlightKey.apply(this, event)});
    return buttons;
  }

  printSymbol() {
    this.textArea.focus();
    this.textArea.value += event.target.innerHTML;
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
        /*if (event.key === 'Shift') {
          this.removeBoard();
          this.boardStringWrapper = this.createBoardLines(englishBoardShiftCase);
          this.buttons = this.createBoardButtons(englishBoardShiftCase);
          elem.style.backgroundColor = 'orange';
          elem.style.borderRadius = '20px';
        }*/
      }
    }

  }

  abortHighlightKey() {
    this.textArea.focus();

    for (let elem of this.buttons) {
      if (event.code === elem.code) {
        elem.style.backgroundColor = '';
        elem.style.borderRadius = '';
        /*if (event.key === 'Shift') {
          this.removeBoard();
          this.boardStringWrapper = this.createBoardLines(englishBoardLowerCase);
          this.buttons = this.createBoardButtons(englishBoardLowerCase);
        }*/
      }
    }
    

  }

}

const board = new Board();
board.textArea = board.createTextArea();
board.boardStringWrapper = board.createBoardLines(englishBoardLowerCase);
board.buttons = board.createBoardButtons(englishBoardLowerCase);


