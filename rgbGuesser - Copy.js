var colors = generateRandomColors(6);

function pickColor(len) {
    var number = Math.floor(Math.random() * len);
    return colors[number];
}

function changeColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colorPicked;
    }
}


var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var colorPicked = pickColor(6);
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
colorDisplay.textContent = colorPicked;


for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (clickedColor === colorPicked) {
            messageDisplay.textContent = "Correct";
            h1.style.background = clickedColor;
            changeColor();
            resetButton.textContent = "Play Again ?"
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.background = "black";
        }
    });

}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}


function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(6);
    colorPicked = pickColor(6);
    colorDisplay.textContent = colorPicked;
    h1.style.bakground = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

easyButton.addEventListener("click", function() {
    hardButton.classList.remove("Selected");
    easyButton.classList.add("Selected");

    colors = generateRandomColors(3);
    colorPicked = pickColor(3);
    colorDisplay.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})
hardButton.addEventListener("click", function() {
    easyButton.classList.remove("Selected");
    hardButton.classList.add("Selected");

    colors = generateRandomColors(6);
    colorPicked = pickColor(6);
    colorDisplay.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

})