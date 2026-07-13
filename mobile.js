const mobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

document.getElementById("device").innerText=
mobile?"Mobile Detected":"Desktop Detected";

if(mobile){

document.getElementById("controls").style.display="block";

const buttons={
up:[0,-1],
down:[0,1],
left:[-1,0],
right:[1,0]
};

Object.keys(buttons).forEach(id=>{

const b=document.getElementById(id);

let hold;

b.addEventListener("touchstart",()=>{

hold=setInterval(()=>{

player.x+=buttons[id][0]*player.speed;

player.y+=buttons[id][1]*player.speed;

},16);

});

b.addEventListener("touchend",()=>{

clearInterval(hold);

});

});

}
