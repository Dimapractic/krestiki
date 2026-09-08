const { createBoard, makeMove, checkWinner } = require('./game');

describe('Игровое поле', () => {
    test('должно создаваться пустым', () => {
        const board = createBoard();

        expect(board).toEqual([
            '', '', '',
            '', '', '',
            '', '', ''
        ]);
    });

    test('игрок должен иметь возможность сделать ход', () => {
        const board = createBoard();

        const newBoard = makeMove(board, 0, 'X');

        expect(newBoard[0]).toBe('X');
    });
    test('нельзя сделать ход в занятую клетку', () => {
        const board = createBoard();

        const boardAfterFirstMove = makeMove(board, 0, 'X');

        expect(() => makeMove(boardAfterFirstMove, 0, 'O')).toThrow();
    });
    test('должен определять победителя по горизонтали', () => {
        const board = [
        'X', 'X', 'X',
        'O', 'O', '',
        '', '', ''
        ];

        expect(checkWinner(board)).toBe('X');
    });
});