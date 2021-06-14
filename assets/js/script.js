// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
                } else {
                    let gameType = this.getAttribute("data-type");
                    alert(`youclicked ${gameType}`);
                }
        })
    }
})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
 function runGame(){
    let num1 = Math.ceiling(Math.random()*25);
    let num2 = Math.floor(Math.random() * 25 +1); 

}

function checkanswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractionQuestion(){

}

function displayMultiplicationQuestion(){

}

function displayDivisionQuestion(){

}
