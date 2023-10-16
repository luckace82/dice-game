var random = Math.floor(Math.random() * 6 + 1);
var img = "dice" + random + ".png";
var image = "images/" + img;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", image);


var random2 = Math.floor(Math.random() * 6 + 1);
var img2 = "dice" + random2 + ".png";
var image_2 = "images/" + img2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", image_2);


if (random > random2) {
    document.querySelector("h1").innerHTML = "player1 wins";
} else if (random < random2) {
    document.querySelector("h1").innerHTML = "player2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}