var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

var randonDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png- dice.png6

var randomImageSource = "images/" + randonDiceImage;  //images/dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //1-6

var randonDiceImage2 = "dice" + randomNumber2 + ".png";  //dice1.png- dice.png6

var randomImageSource2 = "images/" + randonDiceImage2;  //images/dice1.png-dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2); 

if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!";

}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}











