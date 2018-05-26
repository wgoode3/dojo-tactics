let rangeX = 0;
let rangeY = 0;

/*
 * Tile types:
 * 0. water
 * 1. plains
 * 2. forest
 * 3. road
 * 4. mountain
 */

const tiles = [
	"water", 
	"plains", 
	"forest",
	"road", 
	"mountain"
];

const world = [
	[0, 0, 1, 1, 2, 2, 2, 1, 4, 4, 1, 1, 1, 1, 1],
	[0, 0, 0, 1, 1, 2, 1, 1, 4, 1, 1, 2, 2, 4, 1],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 4],
	[0, 1, 1, 1, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 4],
	[0, 0, 1, 4, 2, 1, 0, 0, 1, 4, 1, 1, 1, 4, 4],
	[0, 0, 1, 4, 4, 1, 1, 0, 1, 4, 1, 1, 1, 4, 1],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
	[0, 0, 1, 1, 4, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
	[0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 0, 1, 1, 1, 1],
	[0, 0, 1, 1, 2, 2, 2, 1, 4, 4, 0, 0, 0, 1, 1],
	[0, 0, 0, 1, 1, 2, 1, 1, 4, 1, 1, 1, 0, 1, 1],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
	[0, 1, 1, 1, 2, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
	[0, 0, 1, 4, 2, 1, 0, 0, 1, 4, 1, 1, 0, 0, 1]
];

let visible;

function calculateVisible(x, y) {
	visible = [];
	for (let i=0; i<10; i++) {
		visible.push([]);
		for (let j=0; j<10; j++) {
			visible[i].push(world[i+y][j+x]);
		}
	}
	drawWorld();
}
calculateVisible(0, 0);

function drawWorld() {
	let output = "";
	for (let row in visible) {
		output += "<div class='row'>";
		for (let column in visible[row]) {
			let c = parseInt(column) + parseInt(rangeX);
			let r = parseInt(row) + parseInt(rangeY);
			output += `<div class="tile ${tiles[visible[row][column]]}" data-row="${r}" data-col="${c}"></div>`;
		}
		output += "</div>";
	}
	const field = document.getElementById("field");
	field.innerHTML = output;
}

