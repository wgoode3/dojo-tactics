let cursor = {y: 0, x: 0};
let active_tile = document.querySelector(`[data-row="${cursor.y}"][data-col="${cursor.x}"]`);
let cursor_tile = document.getElementById("cursor");

function setActiveTile() {
	prev = active_tile;
	active_tile = document.querySelector(`[data-row="${cursor.y}"][data-col="${cursor.x}"]`);
	cursor_tile.style.top = `${active_tile.getBoundingClientRect().top}px`;
	cursor_tile.style.left = `${active_tile.getBoundingClientRect().left}px`;
}
setActiveTile();

document.onkeydown = (k) => {
	let changed = true;
	if(k.keyCode === 38) {
		// up
		cursor.y > 0 ? cursor.y-- : cursor.y;
	} else if(k.keyCode === 37) {
		// left
		cursor.x > 0 ? cursor.x-- : cursor.x;
	} else if(k.keyCode === 40) {
		// down
		cursor.y < world.length-1 ? cursor.y++ : cursor.y;
	} else if(k.keyCode === 39) {
		// right
		cursor.x < world[0].length-1 ? cursor.x++ : cursor.x;
	} else {
		changed = false;
	}
	if(changed) {
		if(cursor.x > rangeX + 9) {
			rangeX++;
			calculateVisible(rangeX, rangeY);
		}
		if(cursor.x < rangeX) {
			rangeX--;
			calculateVisible(rangeX, rangeY);
		}
		if(cursor.y > rangeY + 9) {
			rangeY++;
			calculateVisible(rangeX, rangeY);
		}
		if(cursor.y < rangeY) {
			rangeY--;
			calculateVisible(rangeX, rangeY);
		}
		setActiveTile();
	}
};