<!DOCTYPE html>
<html>
<head>
<title>KARE IEEE EMBS Inauguration</title>

<style>

body{
font-family: Arial;
background:#0b1a3a;
text-align:center;
color:white;
}

h1{
margin-top:30px;
}

#logo-container{
width:400px;
height:400px;
margin:40px auto;
position:relative;
}

#logo{
width:100%;
filter:brightness(0);
transition:1s;
}

button{
padding:15px 35px;
font-size:18px;
background:#0072ce;
border:none;
color:white;
cursor:pointer;
border-radius:6px;
}

button:hover{
background:#005bb5;
}

#message{
margin-top:20px;
font-size:18px;
}

</style>
</head>

<body>

<h1>IEEE EMBS Student Chapter Inauguration</h1>

<div id="logo-container">
<img id="logo" src="logo.png">
</div>

<button onclick="lightLamp()">🪔 Light the Lamp</button>

<div id="message"></div>

<script>

let clicks = 0;

function lightLamp(){

clicks++;

let brightness = clicks * 0.2;

document.getElementById("logo").style.filter =
"brightness("+brightness+")";

document.getElementById("message").innerHTML =
"Guest "+clicks+" lit the lamp";

if(clicks >= 5){
document.getElementById("message").innerHTML =
"🎉 Logo Fully Revealed! Inauguration Completed!";
}

}

</script>

</body>
</html>
