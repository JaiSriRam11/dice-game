
function startGame(){


// image 1 random number generator
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage1= "images/Dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

// image 2 random number generator
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2= "images/Dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// declaring the winner loop
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent="🚩 Player 1 won.";
    
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent="Player 2 won 🚩";
    
}
else {
    document.querySelector("h1").textContent="🎌..Draw..🎌";
    
}


}