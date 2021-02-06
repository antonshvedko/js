class Figure {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}
}

class Line extends Figure {
	constructor(x, y, x2, y2, color) {
		super(x, y, color);

		this.x2 = x2;
		this.y2 = y2;
	}

	draw() {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();
	}
}


class Rect extends Figure  {
	constructor (x, y, width, height, color) {
	super(x, y, color);

	this.w = width;
	this.h = height;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.fill();
	}
}

class Circle extends Figure {
	constructor (x, y, radius, color) {
	super(x, y, color);

	this.r = radius;
}
	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
	}
}

class Zigzag extends Figure   {
	constructor(x, y, step, lineWidth, color) {
	super(x, y, color);
	this.x = x;
	this.y = y;
	this.step = step;
	this.lineWidth = lineWidth;
	}
	draw() {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.lineWidth;

		for (let i = this.x; i < ctx.canvas.width; i += this.step) {
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x = i * 2 + this.step, this.y + this.step);
			ctx.moveTo(this.x, this.y + this.step);
			ctx.lineTo(this.x = (i + this.step) * 2, this.y);
		}
		ctx.stroke();
	};
}

let ctx;
let canvas;

class Canvas {
	constructor (myId) {
	canvas = document.getElementById(myId);
	ctx = canvas.getContext("2d");
	}
	add(...arg) {
		for (let i = 0; i < arg.length; i++) {
			arg[i].draw();
		}
	}
}

let drawArea = new Canvas('canvas');

let line = new Line(50, 250, 200, 200, 'black');

let rect = new Rect(350, 100, 100, 40, 'tomato');
let rect2 = new Rect(250, 150, 35, 150, 'black');

let circle = new Circle(100, 120, 20, 'tomato');
let circle2 = new Circle(100, 120, 40, 'black');

let zigzag = new Zigzag(0, 10, 30, 3, "black");

drawArea.add(line, circle2, circle, rect, rect2, zigzag);