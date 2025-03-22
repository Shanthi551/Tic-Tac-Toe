let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;


function handleCellClick(event) {
    if (gameOver) return;

    const cellIndex = event.target.id.split('-')[1];
    if (gameBoard[cellIndex] !== '') return;

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkForWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        if (
 gameBoard[condition[0]] !== '' &&
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[0]] === gameBoard[condition[2]]
        ) {
            gameOver = true;
            alert(`Player ${gameBoard[condition[0]]} wins!`);
        }
    }

    if (!gameBoard.includes('') && !gameOver) {
        gameOver = true;
        alert('It\'s a draw!');
    }
}


function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
}


const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

document.getElementById('reset-button').addEventListener('click', resetGame);
