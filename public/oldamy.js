import{updateScore, updateLastPlayed} from "/app.js";

var cards = document.querySelectorAll("div.cards");
var higher = document.getElementById("higher");
var lower = document.getElementById("lower");

//NEED TO STREAMLINE FUNCTION
//game function 
const hlbutton = document.querySelector("#new-hl-game");
hlbutton.addEventListener('click', higherLower);

function higherLower(){
//makes all backgrounds standard on reset
for (let i = 0; i < cards.length; i++){
  cards[i].className = "cards";
  cards[i].textContent = "";
}
  var randoms = [];
  //next section shows first card
  randoms.push(Math.floor(Math.random()*13) + 1);
  //makes picture cards turn into letters rather than numbers
  if (randoms[0] == 1||randoms[0] == 11||randoms[0] == 12||randoms[0] == 13){
    cards[0].textContent = numberCards(randoms[0]);
  } else{
    cards[0].textContent = randoms[0];
  }
  cards[0].className = "cards-selected";
  switchVisibility();

  var i = 0;

  higher.onclick = function(){
    if(i < 5){
      randoms.push(Math.floor(Math.random()*13) + 1);
      cards[i+1].className = "cards-selected";
      if (randoms[i+1] == 1||randoms[i+1] == 11||randoms[i+1] == 12||randoms[i+1] == 13){
        cards[i+1].textContent = numberCards(randoms[i+1]);
        } else{
          cards[i+1].textContent = randoms[i+1];
        }
          if (randoms[i+1] >= randoms[i]){
            if(i == 4){
              alert("Congratulations! You are the master of probability! You can't stop when you're on a winning streak, so select 'New Game' to play again.")
                updateScore("higher-lower");
                updateLastPlayed("higher-lower");
              switchVisibility();
          }
            else{
              i++;
            }
          } else {
            i=+ 5;
            alert("Uh oh. Looks like you got beaten by probability! Click 'New Game' to try again.");
            switchVisibility();
            updateLastPlayed("higher-lower");
            return;
          }
        }
      }

      lower.onclick = function(){
        if(i < 5){
          randoms.push(Math.floor(Math.random()*13) + 1);
          cards[i+1].className = "cards-selected";
          if (randoms[i+1] == 1||randoms[i+1] == 11||randoms[i+1] == 12||randoms[i+1] == 13){
            cards[i+1].textContent = numberCards(randoms[i+1]);
          } else{
            cards[i+1].textContent = randoms[i+1];
          }
          if(randoms[i+1] <= randoms[i]){
            if(i == 4){
              alert("Congratulations! You are the master of probability! You can't stop when you're on a winning streak, so select 'New Game' to play again.")
              switchVisibility();
              updateScore("higher-lower");
              updateLastPlayed("higher-lower");
            }
            else{
              i++;
            }
          } else {
            i=+ 5;
            alert("Uh oh. Looks like you got beaten by probability! Click 'New Game' to try again.");
            switchVisibility();
            updateLastPlayed("higher-lower");
            return;
        }
      } 
    }
  }
//if time, streamline this function, split into smaller functions and callback!!

//create card function to call within higherlower where if random number is 11 12 13 it returns jack queen king instead
function numberCards(number){
  var letter;
  switch(number){
    case 1:
      letter = "A";
      break;
    case 11:
      letter = "J";
      break;
    case 12:
      letter = "Q";
      break;
    case 13:
      letter = "K";
      break;
  }
  return letter;
}


function switchVisibility(){
    higher.style.visibility="visible";
    lower.style.visibility="visible";
  }