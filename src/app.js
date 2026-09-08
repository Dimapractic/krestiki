const {
    createBoard,
    makeMove,
    checkWinner
} = require('./game');
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