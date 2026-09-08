/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js"
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
(module) {

function createBoard() {
    return [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
}

function makeMove(board, index, player) {
    if (board[index] !== '') {
        throw new Error('Клетка уже занята');
    }

    const newBoard = [...board];
    newBoard[index] = player;

    return newBoard;
}

function checkWinner(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
            board[a] !== '' &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a];
        }
    }

    return null;
}

module.exports = {
    createBoard,
    makeMove,
    checkWinner
};

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
const {
    createBoard,
    makeMove,
    checkWinner
} = __webpack_require__(/*! ./game */ "./src/game.js");
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#message');
const restartButton = document.querySelector('#restart');

let board = createBoard();
let currentPlayer = 'X';

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        const index = Number(cell.dataset.index);

        try {
            board = makeMove(board, index, currentPlayer);
            cell.textContent = currentPlayer;

            const winner = checkWinner(board);

            if (winner) {
                message.textContent = `Победил игрок ${winner}`;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Ход игрока: ${currentPlayer}`;
        } catch (error) {
            message.textContent = error.message;
        }
    });
});

restartButton.addEventListener('click', () => {
    board = createBoard();
    currentPlayer = 'X';

    cells.forEach((cell) => {
        cell.textContent = '';
    });

    message.textContent = 'Ход игрока: X';
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map