// map.js

const TILE_SIZE = 64;

const MAP = [
"####################",
"#..................#",
"#....N.............#",
"#..................#",
"#..........D.......#",
"#..................#",
"#..................#",
"####################"
];

const tiles = [];

function loadMap() {

    tiles.length = 0;

    for (let y = 0; y < MAP.length; y++) {

        for (let x = 0; x < MAP[y].length; x++) {

            tiles.push({
                x,
                y,
                type: MAP[y][x]
            });

        }

    }

}

function drawMap(ctx) {

    for (const tile of tiles) {

        const drawX = tile.x * TILE_SIZE - camera.x;
        const drawY = tile.y * TILE_SIZE - camera.y;

        switch (tile.type) {

            case "#":

                ctx.fillStyle = "#808080";
                ctx.fillRect(drawX, drawY, TILE_SIZE, TILE_SIZE);

                break;

            case ".":

                ctx.fillStyle = "#d6d6d6";
                ctx.fillRect(drawX, drawY, TILE_SIZE, TILE_SIZE);

                break;

            case "N":

                ctx.fillStyle = "yellow";
                ctx.fillRect(
                    drawX + 16,
                    drawY + 16,
                    32,
                    32
                );

                break;

            case "D":

                ctx.fillStyle = "brown";
                ctx.fillRect(drawX, drawY, TILE_SIZE, TILE_SIZE);

                break;

        }

    }

}
