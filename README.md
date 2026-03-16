<!DOCTYPE html>
<html>

<head>

<title>KARE IEEE EMBS Inauguration</title>

<style>

body{
background:#0b1a3a;
font-family:Arial;
text-align:center;
color:white;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
flex-direction:column;
}

.section{
opacity:0;
transition:1.5s;
}

.show{
opacity:1;
}

#logo{
width:280px;
margin-top:20px;
opacity:0;
transition:2s;
}

button{
margin-top:30px;
padding:15px 35px;
font-size:18px;
background:#0072ce;
border:none;
color:white;
border-radius:8px;
cursor:pointer;
}

button:hover{
background:#005bb5;
}

canvas{
position:fixed;
top:0;
left:0;
pointer-events:none;
}

</style>

</head>

<body>

<h1>Digital Inauguration Ceremony</h1>

<div id="college" class="section">
<h2>Kalasalingam Academy of Research and Education</h2>
</div>

<div id="ieee" class="section">
<h2>IEEE Student Branch</h2>
</div>

<div id="embs" class="section">
<h2>KARE IEEE EMBS Student Chapter</h2>
<img id="logo" src="logo.png">
</div>

<button onclick="nextStep()">🪔 Light the Lamp</button>

<canvas id="fire"></canvas>

<script>

let step=0;

function nextStep(){

step++;

if(step==1){
document.getElementById("college").classList.add("show");
}

if(step==2){
document.getElementById("ieee").classList.add("show");
}

if(step==3){
document.getElementById("embs").classList.add("show");
document.getElementById("logo").style.opacity="1";
fireworks();
}

}

function fireworks(){

let canvas=document.getElementById("fire");

let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){

particles.push({

x:canvas.width/2,
y:canvas.height/2,
dx:(Math.random()-0.5)*6,
dy:(Math.random()-0.5)*6,
size:4

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.fillStyle="gold";
ctx.fillRect(p.x,p.y,p.size,p.size);

p.x+=p.dx;
p.y+=p.dy;

});

requestAnimationFrame(animate);

}

animate();

}

</script>

</body>

</html>
