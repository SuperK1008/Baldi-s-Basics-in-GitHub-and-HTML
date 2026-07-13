const play = document.getElementById("play");
const title = document.getElementById("titleScreen");
const game = document.getElementById("game");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const camera = {
    x: 0,
    y: 0
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

loadMap(); // Load the map ONCE

let player = {
    x: 150,
    y: 150,
    speed: 4
};

let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

play.onclick = () => {
    title.style.display = "none";
    game.style.display = "block";
    loop();
};

function update() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;
}

function draw() {

    camera.x = player.x - canvas.width / 2;
    camera.y = player.y - canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap(ctx);

    ctx.fillStyle = "green";
    ctx.fillRect(
        player.x - camera.x,
        player.y - camera.y,
        32,
        32
    );
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
