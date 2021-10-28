const board = document.querySelector('.boardFields')
const firstPlayer = 'fa-circle-o'
const secondPlayer = 'fa-times'
let queue = 'firstPlayer'
let round = 1
let column, row, turn
let winner
let stillGaming = true

const result = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

const resultCombination = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
]

const gameEnd = () => {
    if(winner == 'secondPlayer') {
        winner = 'cross'
    } else {
        winner = 'circle'
    }
    document.querySelector('h1').textContent = 'Game end, win: ' + winner
    stillGaming = false
}

const gameCheck = () => {
    console.log(result)
    if(result[0][0] == 'firstPlayer' && result[0][1] == 'firstPlayer' && result[0][2] == 'firstPlayer' || result[0][0] == 'secondPlayer' && result[0][1] == 'secondPlayer' && result[0][2] == 'secondPlayer') {
        winner = result[0][0]
        gameEnd()
    } 
    else if(result[1][0] == 'firstPlayer' && result[1][1] == 'firstPlayer' && result[1][2] == 'firstPlayer' || result[1][0] == 'secondPlayer' && result[1][1] == 'secondPlayer' && result[1][2] == 'secondPlayer') {
        winner = result[1][0]
        gameEnd()
    }
    else if(result[2][0] == 'firstPlayer' && result[2][1] == 'firstPlayer' && result[2][2] == 'firstPlayer' || result[2][0] == 'secondPlayer' && result[2][1] == 'secondPlayer' && result[2][2] == 'secondPlayer') {
        winner = result[2][0]
        gameEnd()
    }
    else if(result[0][1] == 'firstPlayer' && result[1][1] == 'firstPlayer' && result[2][1] == 'firstPlayer' || result[0][1] == 'secondPlayer' && result[1][1] == 'secondPlayer' && result[2][1] == 'secondPlayer') {
        winner = result[0][1]
        gameEnd()
    }
    else if(result[0][0] == 'firstPlayer' && result[1][1] == 'firstPlayer' && result[2][2] == 'firstPlayer' || result[0][0] == 'secondPlayer' && result[1][1] == 'secondPlayer' && result[2][2] == 'secondPlayer') {
        winner = result[0][0]
        gameEnd()
    }
    else if(result[0][2] == 'firstPlayer' && result[1][2] == 'firstPlayer' && result[2][2] == 'firstPlayer' || result[0][2] == 'secondPlayer' && result[1][2] == 'secondPlayer' && result[2][2] == 'secondPlayer') {
        winner = result[0][2]
        gameEnd()
    }
    else if(result[0][1] == 'firstPlayer' && result[1][0] == 'firstPlayer' && result[1][2] == 'firstPlayer' || result[0][1] == 'secondPlayer' && result[1][0] == 'secondPlayer' && result[1][2] == 'secondPlayer') {
        winner = result[0][1]
        gameEnd()
    } else if(result[0][2] == 'firstPlayer' && result[1][1] == 'firstPlayer' && result[2][0] == 'firstPlayer' || result[0][2] == 'secondPlayer' && result[1][1] == 'secondPlayer' && result[2][0] == 'secondPlayer') {
        winner = result[0][2]
        gameEnd()
    } 
    else {
        if(round == 10) {
            document.querySelector('h1').textContent = 'not one win'
        }
    }
}

const gameContinue = (e) => {
    round++
    result[row][column] = turn
    gameCheck(e)
}

const gameClick = (e) => {
    row = e.target.closest('div').dataset.row
    column = e.target.closest('div').dataset.column
    if(result[row][column] == '' && stillGaming == true) {
    if(queue == 'firstPlayer') {
        turn = queue
        e.target.closest('div').classList.add(firstPlayer)
        queue = 'secondPlayer'
        gameContinue(e)
    } else {
        e.target.closest('div').classList.add(secondPlayer)
        turn = queue
        queue = 'firstPlayer'
        gameContinue(e)
    }}
}

board.addEventListener('click', (e) => {
    if(e.target.closest('div').classList.contains('boxTiles')){
        console.log(e.target.closest('div'))
        gameClick(e)
    }
})