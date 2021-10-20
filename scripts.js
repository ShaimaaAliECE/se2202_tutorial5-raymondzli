let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let nextPlayer1 = 'O';
//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    var btn = document.createElement('button');
    btn = document.getElementById('c1').innerHTML = '[ ]';
    btn = document.getElementById('c2').innerHTML = '[ ]';
    //let btn1 = document.getElementById('c1');
    //let btn2 = document.getElementById('c2');
    let btn3 = document.getElementById('c3');
    let btn4 = document.getElementById('c4');
    let btn5 = document.getElementById('c5');
    let btn6 = document.getElementById('c6');
    let btn7 = document.getElementById('c7');
    let btn8 = document.getElementById('c8');
    let btn9 = document.getElementById('c9');

    
   // btn1.innerHTML = "[ ]";
    //btn2.innerHTML = "[ ]";
    btn3.innerHTML = "[ ]";
    btn4.innerHTML = "[ ]";
    btn5.innerHTML = "[ ]";
    btn6.innerHTML = "[ ]";
    btn7.innerHTML = "[ ]";
    btn8.innerHTML = "[ ]";
    btn9.innerHTML = "[ ]";
    


   

   //document.body.appendChild(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
    
   
}
document.getElementById("c1").addEventListener("click", takeCell(event))

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    btns[i].getElementById("[ ]").addEventListener("click", event =>{console.log(nextPlayer)});
    
    event.target.disabled = 'disabled';
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        if (btns[1,2,3,4,5,6,7,8,9] == 'disabled'){
            isGameOver();
        
        } 
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
