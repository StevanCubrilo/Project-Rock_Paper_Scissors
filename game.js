//create function for computer to choose randomly between R-P-S

function computerPlay () {
    const move = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * move.length);
    return(random, move[random]);
}

let computerSelection = computerPlay ();

//create function for player to choose between R-P-S

function playerPlay () {
    
    let choose = prompt ("Please choose between rock, paper and scissors", " ")
    choose = choose.toLowerCase();
    return choose; 

}

let playerSelection = playerPlay ();

//create function to play one round
function round (playerSelection,computerSelection) {
    
    if (computerSelection=="rock" && playerSelection=="paper") {
        return ("You win!, you chose "+ playerSelection + " and computer chose " +computerSelection);
    }
    else if (computerSelection==playerSelection) {
        return ("tie, you both chose " + playerSelection);
    }

    else if (computerSelection=="paper" && playerSelection=="scissors") {
        return ("You win!, you chose "+ playerSelection + " and computer chose " +computerSelection);
    }
    else if (computerSelection=="scissors" && playerSelection=="rock") {
        return ("You win!, you chose "+ playerSelection + " and computer chose " +computerSelection);
    }
    else {
        return ("You lose! you chose "+ playerSelection +" and computer chose "+ computerSelection);
    }
}

let oneparty = round(playerSelection,computerSelection);

//console.log(round(playerSelection,computerSelection));

//create a function that play 5 round and store result

function game() {

    for(let i = 0; i<6; i++) {
        alert(oneparty);
        
    }   

  }


game();


//let i = 0;
//do {
  //i += 1;
          //let answers = ["Rock","Paper","Scissors"]
         // let computerPlay = answers[Math.floor(Math.random() * answers.length)];

          //let playerPlay = prompt("choose your move.");

         // if (computerPlay==playerPlay) {console.log("tie, you both chose " + playerPlay)}
         // else if (computerPlay=="Rock" && playerPlay=="Paper")   {console.log("You win!, you chose "+ playerPlay + " and computer chose " +computerPlay)}
         // else if (computerPlay=="Paper" && playerPlay=="Scissors")   {console.log("You win!, you chose "+ playerPlay + " and computer chose " +computerPlay)}
         // else if (computerPlay=="Scissors" && playerPlay=="Rock")   {console.log("You win!, you chose "+ playerPlay + " and computer chose " +computerPlay)}
          //else {console.log("you lose! you chose "+ playerPlay +" and computer chose "+ computerPlay)}
      //  } while (i < 5);





