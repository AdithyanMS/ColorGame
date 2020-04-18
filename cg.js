var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorD = document.getElementById("colorD");
var messageD = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorD.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorD.textContent = pickedColor;
    messageD.textContent = "";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    };
    
});
hardBtn.addEventListener("click",function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorD.textContent = pickedColor;
    messageD.textContent = "";
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    };
});

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorD.textContent = pickedColor;
    messageD.textContent = "";
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
});

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageD.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.background = "#232323";
            messageD.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    
    return arr;
}

function randomColor(){
    var r =Math.floor(Math.random() * 256);
    var g =Math.floor(Math.random() * 256);
    var b =Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}