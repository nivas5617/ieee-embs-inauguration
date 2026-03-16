let clicks = 0;

function lightLamp(){

clicks++;

let brightness = clicks * 0.3;

document.getElementById("logo").style.filter =
"brightness("+brightness+")";

document.getElementById("status").innerHTML =
"Lamp "+clicks+" Lit 🔥";

if(clicks >= 4){

document.getElementById("status").innerHTML =
"🎉 Inauguration Completed 🎉";

startConfetti();

}

}

function startConfetti(){

const canvas = document.getElementById("confetti");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let pieces = [];

for(let i=0;i<150;i++){

pieces.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*6+4,

speed:Math.random()*3+2

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

ctx.fillStyle="gold";

ctx.fillRect(p.x,p.y,p.size,p.size);

p.y+=p.speed;

if(p.y>canvas.height) p.y=0;

});

requestAnimationFrame(draw);

}

draw();

}
