let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;
let FORCE = 100;
let SPEED = 500;



let bg = [255, 255, 0];

kaboom({
	fullscreen:true,
width: WIDTH,
height: HEIGHT,
background: bg,
});


const player2 = add([sprite("hamster"), pos(10, 80), area(), body()]);
const floor = add([
	rect(WIDTH,100),
	outline(5),
	pos(0, HEIGHT - 20),
	area(),
	solid(),
	color(127, 200, 255),
]);


const leftWall = add([
	rect(20, height()),
	outline(4),
	pos(WIDTH -20, -20),
	area(),
	solid(),
	color(127, 200, 255),
]);

const rightWall = add([
	rect(20, height()),
	outline(4),
	pos(0, -20),
	area(),
	solid(),
	color(127, 200, 255),
]);
const hamster = "./hamster.png";
const brickWall = "./brickWall.png";
const coins = "./coin2.png"
loadSprite("hamster", hamster);
loadSprite("bricks", brickWall);
loadSprite("coins", coins)
const bricks = add([
	sprite("bricks"),
	area(),
	solid(),
	pos(250, 1075),
	scale(1)
]);
const bricks2 = add([
	sprite("bricks"),
	area(),
	solid(),
	pos(1750, 1075),
	scale(1)
]);


onKeyPress("w", () => {
	if (player2.grounded()) {
		player2.jump(1000);
	}
})

onKeyDown('d', ()=>{
player2.move(SPEED, 0)
});

onKeyDown('a', ()=>{
	player2.move(-SPEED, 0)
})


const turtle = "./turtle.png"

loadSprite("turtle", turtle);
const player1 = add([sprite("turtle"), pos(950, 80), area(), body()]);
onKeyPress("up", () => {
	if (player1.grounded()) {
		player1.jump(1000);
	}
})
	
	onKeyDown('right', ()=>{
	player1.move(SPEED, 0)
	player1.flipX(-1);
	});
	
	onKeyDown('left', ()=>{
		player1.move(-SPEED, 0)
		player1.flipX();
	})
	const coins2 = add([
		sprite("coins"),
		pos(1825, 80),
		body(),
		area(),
		scale(0.2),
		"coins",
	]);
	



	const ching = (item) => {
		let x = Math.floor(Math.random() * WIDTH) - 20;
		const addCoin = add([
			sprite(item),
			pos(x, 80),
			area(),
			body(),
			scale(0.2),
			item,
		]);
	};
	ching("coins")
	

	player2.onCollide("coins", (coins) => {
		destroy(coins);
	
		score.value += 10;
		score.text = `Score:${score.value}`;
		if (score.value >= 100) {
			ching("hamster")
			shake(100)
		};
		ching("coins");
	});
	player1.onCollide("coins", (coins) => {
		destroy(coins);
		score.value += 10;
		score.text = `Score:${score.value}`;
		if (score.value >= 100) {
			ching("hamster")
			shake(10)
		};
		ching("coins");
	});

	// loadSound("music", "./chicken.mp3")
	// const music = play("music", {
	// volume: 0.3,
	// diableWebAudio: true,
	// loop: true,
	// });
	// music.play(); 

	let mousePosition = add([text(`Mouse:0`), pos(100, 100), { value: 0 }]);
onMouseRelease("left", (e) => {
	mousePosition.text = `Mouse:X:${e.x}, Y:${e.y}`;
	console.log(e);
});
const score = add([text(`Score:0`), pos(100, 24), { value: 0 }]);

player1.onCollide("hamster", (hamster) => {
	destroy(hamster);
	score.value -= 10;
	if (score.value >= 100) {
		burp()
	}
	score.text = `BURP`;
	shake(100);
});
player2.onCollide("hamster", (hamster) => {
	destroy(hamster);
	score.value -= 10;
	if (score.value >= 100) {
		burp()
	}
	score.text = `BURP`;
	shake(100);
});

const gun = "./gun.png"
loadSprite("gun", gun);
const player3 = add([sprite("gun"), pos(1000, 80), area(), body()]);
player3.onCollide("hamster", (hamster) => {
	destroy(hamster);
	score.value -= 10;
	if (score.value >= 100) {
		burp()
	}
	shake(100);
});
player3.onCollide("coins", (coins) => {
	destroy(coins);
	score.value += 10;
	score.text = `Score:${score.value}`;
	if (score.value >= 100) {
		ching("hamster")
		shake(10)
	};
	ching("coins");
});
onKeyPress("t", () => {
	if (player3.grounded()) {
		player3.jump(1000);
	}
})

onKeyDown('h', ()=>{
player3.move(SPEED, 0)
player3.flipX(-1);
});

onKeyDown('f', ()=>{
	player3.move(-SPEED, 0)
	player3.flipX();
})
player3.onCollide("player2", (player2) => {
	destroy(player2);
});
if (!coins2.isFalling()) {
if(coins2.grounded) {
	console.log(coins2);
	coins2.doubleJump();
}
}

const pizza = "./pizzaman.png";
loadSprite("pizza", pizza);
const pizzaman = add([sprite("pizza"), pos(1000, 40), area(), body(), "pizzahit"]);
pizzaman.onCollide("hamster", (hamster) => {
	destroy(hamster);
	score.value -= 10;
	if (score.value >= 100) {
		burp()
	}
	score.text = `BURP`;
	shake(100);
});
onKeyPress("i", () => {
	if (pizzaman.grounded()) {
		pizzaman.jump(1000);
	}
})

onKeyDown('l', ()=>{
pizzaman.move(SPEED, 0)
pizzaman.flipX();
});

onKeyDown('j', ()=>{
	pizzaman.move(-SPEED, 0)
	pizzaman.flipX(-1);
})
pizzaman.onCollide("coins", (coins) => {
	destroy(coins);
	score.value += 10;
	score.text = `Score:${score.value}`;
	if (score.value >= 100) {
		ching("hamster")
		shake(10)
	};
	ching("coins");
});
const pacboy = "./pacman.png";
loadSprite("pacman", pacboy);
const pacman = add([sprite("pacman"), pos(1000, 40), area(), body(), scale(.4)]);
pacman.onCollide("hamster", (hamster) => {
	destroy(hamster);
	if (score.value >= 100) {
		burp()
	}

});
onKeyPress("2", () => {
	if (pacman.grounded()) {
		pacman.jump(1000);
	}
	pacman.flipY(.5);
})

onKeyDown('3', ()=>{
	pacman.move(SPEED, 0)
	pacman.flipX();
});

onKeyDown('1', ()=>{
	pacman.move(-SPEED, 0)
	pacman.flipX(-1);
})
pacman.onCollide("coins", (coins) => {
	destroy(coins);
	score.value += 10;
	score.text = `Score:${score.value}`;
	if (score.value >= 100) {
		ching("hamster")
		shake(10)
	};
	ching("coins");
});
pacman.onCollide("hamster", (hamster) => {
	destroy(player2);
	destroy(pizzaman);
	destroy(player1);
	destroy(player3);
	score.value += 1000000000;
	burp()

});