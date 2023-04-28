let textArea = document.createElement("textarea");
textArea.className = "text-area";
document.body.prepend(textArea);

/*let engBoard = [];
document.addEventListener("keydown", (event) => {
    let k = {};
    k.key = event.key;
    k.code = event.code;
    if (k.code === "MetaLeft") { k.key ="Win"};
    if (k.code === "ControlLeft" || k.code === "ControlRight") { k.key ="Ctrl"};
    engBoard.push(k);
    console.log(engBoard);
})*/



const englishBoardLowerCase = [ 

[
{key: '`', code: 'Backquote'},
{key: '1', code: 'Digit1'},
{key: '2', code: 'Digit2'},
{key: '3', code: 'Digit3'},
{key: '4', code: 'Digit4'},
{key: '5', code: 'Digit5'},
{key: '6', code: 'Digit6'},
{key: '7', code: 'Digit7'},
{key: '8', code: 'Digit8'},
{key: '9', code: 'Digit9'},
{key: '0', code: 'Digit0'},
{key: '-', code: 'Minus'},
{key: '=', code: 'Equal'},
{key: 'Backspace', code: 'Backspace'},
],

[
{key: 'Tab', code: 'Tab'},
{key: 'q', code: 'KeyQ'},
{key: 'w', code: 'KeyW'},
{key: 'e', code: 'KeyE'},
{key: 'r', code: 'KeyR'},
{key: 't', code: 'KeyT'},
{key: 'y', code: 'KeyY'},
{key: 'u', code: 'KeyU'},
{key: 'i', code: 'KeyI'},
{key: 'o', code: 'KeyO'},
{key: 'p', code: 'KeyP'},
{key: '[', code: 'BracketLeft'},
{key: ']', code: 'BracketRight'},
{key: '\\', code: 'Backslash'},
{key: 'Delete', code: 'Delete'},
],

[
{key: 'CapsLock', code: 'CapsLock'},
{key: 'a', code: 'KeyA'},
{key: 's', code: 'KeyS'},
{key: 'd', code: 'KeyD'},
{key: 'f', code: 'KeyF'},
{key: 'g', code: 'KeyG'},
{key: 'h', code: 'KeyH'},
{key: 'j', code: 'KeyJ'},
{key: 'k', code: 'KeyK'},
{key: 'l', code: 'KeyL'},
{key: ';', code: 'Semicolon'},
{key: "'", code: 'Quote'},
{key: 'Enter', code: 'Enter'},
],

[
{key: 'Shift', code: 'ShiftLeft'},
{key: 'z', code: 'KeyZ'},
{key: 'x', code: 'KeyX'},
{key: 'c', code: 'KeyC'},
{key: 'v', code: 'KeyV'},
{key: 'b', code: 'KeyB'},
{key: 'n', code: 'KeyN'},
{key: 'm', code: 'KeyM'},
{key: ',', code: 'Comma'},
{key: '.', code: 'Period'},
{key: '/', code: 'Slash'},
{key: '&uarr;', code: 'ArrowUp'},
{key: 'Shift', code: 'ShiftRight'},
],

[
{key: 'Ctrl', code: 'ControlLeft'},
{key: 'Win', code: 'MetaLeft'},
{key: 'Alt', code: 'AltLeft'},
{key: ' ', code: 'Space'},
{key: 'Alt', code: 'AltRight'},
{key: '&larr;', code: 'ArrowLeft'},
{key: '&darr;', code: 'ArrowDown'},
{key: '&rarr;', code: 'ArrowRight'},
{key: 'Ctrl', code: 'ControlRight'},
],
]

const boardWrapper = document.createElement("div");
boardWrapper.className = "board-wrapper";
textArea.after(boardWrapper);


for (let i = 0; i < 5; i++) {
  const boardStringWrapper = [];
  boardStringWrapper[i] = document.createElement("div");
  boardStringWrapper[i].className = "board-wrapper__string";
  boardWrapper.append(boardStringWrapper[i]);
  for (let j = 0; j < englishBoardLowerCase[i].length; j++) {
    let button = document.createElement("button");
    button.className = "button";
    if (englishBoardLowerCase[i][j].key === " " || englishBoardLowerCase[i][j].key === "Backspace" || englishBoardLowerCase[i][j].key === "Tab" || englishBoardLowerCase[i][j].key === "Delete" || englishBoardLowerCase[i][j].key === "CapsLock" || englishBoardLowerCase[i][j].key === "Enter" || englishBoardLowerCase[i][j].key === "Shift" || englishBoardLowerCase[i][j].key === "Shift") {button.style.flexGrow =1}
    button.innerHTML = englishBoardLowerCase[i][j].key;
    boardStringWrapper[i].append(button);
    button.addEventListener("click", printSymbol);
  }

}
const specButtons = ['Backspace', 'Tab', 'Delete']

function printSymbol() {
  textArea.focus();
  textArea.value += this.innerHTML;
}
