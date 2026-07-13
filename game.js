const play=document.getElementById("play");
const title=document.getElementById("titleScreen");
const game=document.getElementById("game");
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let player={
x:150,
y:150,
speed:4
};

let keys={};

window.addEventListener("keydown",e=>keys[e.key]=true);
window.addEventListener("keyup",e=>keys[e.key]=false);

play.onclick=()=>{

title.style.display="none";

game.style.display="block";

loop();

};

function update(){

if(keys["w"]) player.y-=player.speed;
if(keys["s"]) player.y+=player.speed;
if(keys["a"]) player.x-=player.speed;
if(keys["d"]) player.x+=player.speed;

}

function draw(){

ctx.fillStyle="#ffffff";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="green";
ctx.fillRect(player.x,player.y,32,32);

}

function loop(){

update();

draw();

requestAnimationFrame(loop);

}
