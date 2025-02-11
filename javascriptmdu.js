console.log("Hey,you welcome")


var humanScore = 0;
  var computerScore = 0;
/*var 1round = [Functions.playGame()]*/



//how to put a function call inside a variable?



/*var playGameVar = function playGame(){*/  //wait,how to call a function stored in a variable: the answer to that i discovered is to call the variable as you would a function with parentheses(). 

for(let i=0; i < 5; i++){
  

function playGame() {
  
var rock = "r";
var Paper = "p";
var Scissor = "s";
getHumanChoice();

function getComputerChoice () {
   
    var randomnumber = Math.random();
    var improvednum = (randomnumber * 9) + 1;
    var randomness = Math.floor(improvednum);
   
      
      if(randomness==1||randomness==4||randomness==7){
        console.log("computer chose a rock!");
        
     
      }
          else if(randomness==2||randomness==5||randomness==8){
            console.log("computer chose paper!");
         
          }
              else if(randomness==3||randomness==6||randomness==9){
                console.log("computer chose scissors!");
        
              }
  
              return randomness;   
              
          
}



function getHumanChoice() {

  var humanchoice = prompt("Press R for Rock,P for Paper or S for Scissors");

 
if(humanchoice==rock){
     console.log("You chose a rock!");
 }
  else if(humanchoice==Paper){
      console.log("You chose paper!");
    }

      else if(humanchoice==Scissor){
          console.log("You chose  scissors!");
        }
 
       playRound(humanchoice);// as a return value,the plaRound function is executed by the getHumanChoice function,i discovered that the playRound function cannot execute on it own,which makes sense because an input value from the user must be captured by prompt to first have the human choice.
      
        }

       
        
           
        
function playRound(humanchoice){
  
  
  
  var randomness1 = getComputerChoice(); //first i created a return value for the f(),which returns an integer, then i caught or captured that value using the "randomness1" variable
  /*console.log(randomness1)
  console.log(humanchoice)*/
  
  //humanChoice 'rock' vs [rock,paper,scissor]
  if(humanchoice==rock && (randomness1==2||randomness1==5||randomness1==8)){
   console.log("you loose,paper folds rock,computer wins")
   computerScore++;
     console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
  }
      else if (humanchoice==rock && (randomness1==3||randomness1==6||randomness1==9)) {
        console.log("you win,rock crushes Scissor,computer loose")
          humanScore++;
            console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
      }
          else if(humanchoice==rock && (randomness1==1||randomness1==4||randomness1==7)) {
            console.log("You both chose a rock,its a draw!")
              console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
          }  
             
          
          //humanChoice 'Paper' vs [rock,paper,scissor]
          
          else if(humanchoice==Paper && (randomness1==1||randomness1==4||randomness1==7)) {
               console.log("you win,paper folds rock,computer loose!")
                 humanScore++;
                   console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
                }
                  else if(humanchoice==Paper && (randomness1==2||randomness1==5||randomness1==8)){
                     console.log("you both chose paper,its a draw!")
                        console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
                    }
                        else if(humanchoice==Paper && (randomness1==3||randomness1==6||randomness1==9)) {
                          console.log("you loose,scissors cut paper,computer wins!")
                            computerScore++;
                              console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
                          }

                          //humanChoice 'Scissor' vs [rock,paper,scissor]
                          
                          else if(humanchoice==Scissor && (randomness1==1||randomness1==4||randomness1==7)){
                                console.log("you loose,rock crushes scissor,computer wins!")
                                  computerScore++;
                                    console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
                              }
                                  else if(humanchoice==Scissor && (randomness1==2||randomness1==5||randomness1==8)){
                                    console.log("you win,scissors cuts paper,computer loose!")
                                      humanScore++;
                                        console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
                                  }
                                    else if(humanchoice==Scissor && (randomness1==3||randomness1==6||randomness1==9)){
                                      console.log("you both chose paper,its a draw!")
                                        console.log("Score Board:","Computer: ",computerScore, "Human:",humanScore)
                                    }


        }
      }
   
   //logic for displaying winner.based on the for loop.
   
      playGame();
    if(i == 4){console.log("Game Over")
      if(computerScore > humanScore){
        console.log("computer won")
      }
      else if(humanScore > computerScore){
        console.log("you won")
      }
      else if(computerScore == humanScore){
        console.log("its a draw")
      }

    
    
    }
  

  }
/*var 1round = [Functions.playGame()]  
  
      /*var roundArray = [
        round1 : playGame()
        /*round2 : playGameVar()
        round3 : playGameVar()
        round4 : playGameVar()
        round5 : playGameVar()
  ]
        */
