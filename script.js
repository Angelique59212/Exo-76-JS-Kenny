let dead = 0;

function up () {
    let t = parseInt(document.getElementById('kenny').style.top);
    if ( t > 0) {
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
}
function left () {
    let t =parseInt(document.getElementById('kenny').style.left);
    if (t > 0) {
        t = t - 10;
        document.getElementById('kenny').style.left = t + "px";
    }
}
function right () {
    let t =parseInt(document.getElementById('kenny').style.left);
    if (t < 450 - 32) {
        t = t + 10;
        document.getElementById('kenny').style.left = t + "px";
    }
    else {
        document.getElementById('kenny').style.top = "200px";
        document.getElementById('kenny').style.left = "200px";
        dead++;
        alert("Kenny est mort " + dead + " " + "fois");
    }
}
function down () {
    let t =parseInt(document.getElementById('kenny').style.top);
    if ( t < 500 - 32) {
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
}
document.getElementById('up').addEventListener('click',function() {
   up();
})

document.getElementById("left").addEventListener("click", function () {
    left();
})

document.getElementById("right").addEventListener("click", function () {
    right();
})

document.getElementById("down").addEventListener("click", function () {
   down();
})

let zRouge = document.createElement('div');
zRouge.style.background = "red";
zRouge.style.width = "50px";
zRouge.style.height = "500px";
zRouge.style.position = "relative";
zRouge.style.left = "450px";

let container = document.getElementById('viewport');
container.prepend(zRouge);

document.onkeydown = function handleKeyDown (e) {
   let key = e.keyCode;
   switch (key){
       case 37 :
           left();
           break;
       case 38 :
           up();
           break;
       case 39 :
           right();
           break;
       case 40 :
           down();
           break;
   }
}





