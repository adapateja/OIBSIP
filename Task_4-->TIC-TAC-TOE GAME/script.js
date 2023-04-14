var box11 = -1;
var box12 = -1;
var box13 = -1;
var box21 = -1;
var box22 = -1;
var box23 = -1;
var box31 = -1;
var box32 = -1;
var box33 = -1;
function reset() {
    var clr = document.getElementsByClassName("tdata");
    for (var i = 0; i < clr.length; i++) {
        clr[i].textContent = ""
        clr[i].style.textDecoration="none"
    }
    p.textContent = ""
    p1.textContent = ""
     box12 = -1;
     box13 = -1;
     box21 = -1;
     box11 = -1;
     box22 = -1;
     box23 = -1;
     box31 = -1;
     box32 = -1;
     box33 = -1
}
var tdt11 = document.getElementById("tdata11");
var tdt12 = document.getElementById("tdata12");
var tdt13 = document.getElementById("tdata13");
var tdt21 = document.getElementById("tdata21");
var tdt22 = document.getElementById("tdata22");
var tdt23 = document.getElementById("tdata23");
var tdt31 = document.getElementById("tdata31");
var tdt32 = document.getElementById("tdata32");
var tdt33 = document.getElementById("tdata33");
tdt11.addEventListener('click', function () {
    tdt11.textContent = "X"
    tdt11.style.fontSize = "100px"
    tdt11.style.fontFamily = "sans-serif"
    tdt11.style.textAlign = "center"
    box11 = 0;
    fun()
});
tdt11.addEventListener('dblclick', function () {
    tdt11.textContent = "O"
    tdt11.style.fontSize = "100px"
    tdt11.style.fontFamily = "sans-serif"
    tdt11.style.textAlign = "center"
    box11 = 1;
    fun()
});
tdt12.addEventListener('click', function () {
    tdt12.textContent = "X"
    tdt12.style.fontSize = "100px"
    tdt12.style.fontFamily = "sans-serif"
    tdt12.style.textAlign = "center"
    box12 = 0;
    fun()
});
tdt12.addEventListener('dblclick', function () {
    tdt12.textContent = "O"
    tdt12.style.fontSize = "100px"
    tdt12.style.fontFamily = "sans-serif"
    tdt12.style.textAlign = "center"
    box12 = 1;
    fun()
});
tdt13.addEventListener('click', function () {
    tdt13.textContent = "X"
    tdt13.style.fontSize = "100px"
    tdt13.style.fontFamily = "sans-serif"
    tdt13.style.textAlign = "center"
    box13 = 0;
    fun()
});
tdt13.addEventListener('dblclick', function () {
    tdt13.textContent = "O"
    tdt13.style.fontSize = "100px"
    tdt13.style.fontFamily = "sans-serif"
    tdt13.style.textAlign = "center"
    box13 = 1;
    fun()
});
tdt21.addEventListener('click', function () {
    tdt21.textContent = "X"
    tdt21.style.fontSize = "100px"
    tdt21.style.fontFamily = "sans-serif"
    tdt21.style.textAlign = "center"
    box21 = 0;
    fun()
});
tdt21.addEventListener('dblclick', function () {
    tdt21.textContent = "O"
    tdt21.style.fontSize = "100px"
    tdt21.style.fontFamily = "sans-serif"
    tdt21.style.textAlign = "center"
    box21 = 1;
    fun()
});
tdt22.addEventListener('click', function () {
    tdt22.textContent = "X"
    tdt22.style.fontSize = "100px"
    tdt22.style.fontFamily = "sans-serif"
    tdt22.style.textAlign = "center"
    box22 = 0;
    fun()
});
tdt22.addEventListener('dblclick', function () {
    tdt22.textContent = "O"
    tdt22.style.fontSize = "100px"
    tdt22.style.fontFamily = "sans-serif"
    tdt22.style.textAlign = "center"
    box22 = 1;
    fun()
});
tdt23.addEventListener('click', function () {
    tdt23.textContent = "X"
    tdt23.style.fontSize = "100px"
    tdt23.style.fontFamily = "sans-serif"
    tdt23.style.textAlign = "center"
    box23 = 0;
    fun()
});
tdt23.addEventListener('dblclick', function () {
    tdt23.textContent = "O"
    tdt23.style.fontSize = "100px"
    tdt23.style.fontFamily = "sans-serif"
    tdt23.style.textAlign = "center"
    box23 = 1;
    fun()
});
tdt31.addEventListener('click', function () {
    tdt31.textContent = "X"
    tdt31.style.fontSize = "100px"
    tdt31.style.fontFamily = "sans-serif"
    tdt31.style.textAlign = "center"
    box31 = 0;
    fun()
});
tdt31.addEventListener('dblclick', function () {
    tdt31.textContent = "O"
    tdt31.style.fontSize = "100px"
    tdt31.style.fontFamily = "sans-serif"
    tdt31.style.textAlign = "center"
    box31 = 1;
    fun()
});
tdt32.addEventListener('click', function () {
    tdt32.textContent = "X"
    tdt32.style.fontSize = "100px"
    tdt32.style.fontFamily = "sans-serif"
    tdt32.style.textAlign = "center"
    box32 = 0;
    fun()
});
tdt32.addEventListener('dblclick', function () {
    tdt32.textContent = "O"
    tdt32.style.fontSize = "100px"
    tdt32.style.fontFamily = "sans-serif"
    tdt32.style.textAlign = "center"
    box32 = 1;
    fun()
});
tdt33.addEventListener('click', function () {
    tdt33.textContent = "X"
    tdt33.style.fontSize = "100px"
    tdt33.style.fontFamily = "sans-serif"
    tdt33.style.textAlign = "center"
    box33 = 0;
    fun()
})
tdt33.addEventListener('dblclick', function () {
    tdt33.textContent = "O"
    tdt33.style.fontSize = "100px"
    tdt33.style.fontFamily = "sans-serif"
    tdt33.style.textAlign = "center"
    box33 = 1;
    fun()
});
p = document.getElementById("result")
p1 = document.getElementById("gameover")

function fun() {
    if (box11 == 0 && box12 == 0 && box13 == 0) {
        p.textContent = "SEE FIRST  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt11.style.textDecoration="line-through"
        tdt12.style.textDecoration="line-through"
        tdt13.style.textDecoration="line-through"

    }
    if (box11 == 1 && box12 == 1 && box13 == 1) {
        p.textContent = "SEE FIRST  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt11.style.textDecoration="line-through"
        tdt12.style.textDecoration="line-through"
        tdt13.style.textDecoration="line-through"
    }
    if (box21 == 0 && box22 == 0 && box23 == 0) {
        p.textContent = "SEE SECOND  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt21.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt23.style.textDecoration="line-through"
    }
    if (box21 == 1 && box22 == 1 && box23 == 1) {
        p.textContent = "SEE SECOND  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt21.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt23.style.textDecoration="line-through"
    }
    if (box31 == 0 && box32 == 0 && box33 == 0) {
        p.textContent = "SEE THIRD  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt31.style.textDecoration="line-through"
        tdt32.style.textDecoration="line-through"
        tdt33.style.textDecoration="line-through"
    }
    if (box31 == 1 && box32 == 1 && box33 == 1) {
        p.textContent = "SEE THIRD  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt31.style.textDecoration="line-through"
        tdt32.style.textDecoration="line-through"
        tdt33.style.textDecoration="line-through"
    }
    if (box11 == 0 && box22 == 0 && box33 == 0) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt11.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt33.style.textDecoration="line-through"
    }
    if (box11 == 1 && box22 == 1 && box33 == 1) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt11.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt33.style.textDecoration="line-through"
    }
    if (box13 == 0 && box22 == 0 && box31 == 0) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt13.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt31.style.textDecoration="line-through"
    }
    if (box13 == 1 && box22 == 1 && box31 == 1) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt13.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt31.style.textDecoration="line-through"
    }
    if (box11 == 0 && box21 == 0 && box31 == 0) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt11.style.textDecoration="line-through"
        tdt21.style.textDecoration="line-through"
        tdt31.style.textDecoration="line-through"
    }
    if (box11 == 1 && box21 == 1 && box31 == 1) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt11.style.textDecoration="line-through"
        tdt21.style.textDecoration="line-through"
        tdt31.style.textDecoration="line-through"
    }
    if (box12 == 0 && box22 == 0 && box32 == 0) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt12.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt32.style.textDecoration="line-through"
    }
    if (box12 == 1 && box22 == 1 && box32 == 1) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt12.style.textDecoration="line-through"
        tdt22.style.textDecoration="line-through"
        tdt32.style.textDecoration="line-through"
    }
    if (box13 == 0 && box23 == 0 && box33 == 0) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH X";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt13.style.textDecoration="line-through"
        tdt23.style.textDecoration="line-through"
        tdt33.style.textDecoration="line-through"
    }
    if (box13 == 1 && box23 == 1 && box33 == 1) {
        p.textContent = "SEE DIAGONAL  ROW ARE FILLED WITH O";
        p.style.fontSize = "20PX"
        p.style.fontFamily = "sans-serif"
        p.style.textAlign = "center";
        p1.textContent = "GAME OVER"
        p1.style.fontFamily = "MONOSPACE"
        p1.style.textAlign = "center"
        tdt13.style.textDecoration="line-through"
        tdt23.style.textDecoration="line-through"
        tdt33.style.textDecoration="line-through"
    }
}
