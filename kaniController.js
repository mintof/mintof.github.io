(function(){
const WIDTH=480;
const HEIGHT=320;
const KANI_SRC = "umi_kani.png";
const KAMA_SRC = "food_kanikama.png";
const SYOKUNIN_SRC = "job_syokunin_koujou.png";

var canvas;
var context;
var canvas_flip;
var img;

var mouse = {
	x: WIDTH/2,
	y: HEIGHT/2
};

var kani = {
	x: WIDTH/2,
	y: HEIGHT/2,
	vx: 0,
	vy: 0
};

function clear(ctx){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function cookKani(){
	//var w = Math.abs(-kani.x)
}

function moveKani(mx,my){
	var w = Math.abs(mx-kani.x);
	var h = Math.abs(my-kani.y);
	if(w<1) w=1;
	if(h<1) h=1;
	var g = 1/Math.pow(w*w+h*h, 0.5);
	var ax = Math.pow(g/(1+(h*h)/(w*w)), 0.5);
	var ay = h/w*ax;
	if(mx<kani.x) ax = -ax;
	if(my<kani.y) ay = -ay;
	kani.vx += ax;
	kani.vy += ay;
	kani.x += kani.vx;
	kani.y += kani.vy;
	if(kani.x<0)kani.x=0;
	if(kani.y<0)kani.y=0;
	if(kani.x>WIDTH)kani.x=WIDTH;
	if(kani.y>HEIGHT)kani.y=HEIGHT;
}

function drawKani(mx,my){
	canvas[1-canvas_flip].style.visibility = "hidden";
	canvas[canvas_flip].style.visibility = "visible";
	canvas_flip = 1-canvas_flip;
	ctx = context[canvas_flip];
	clear(ctx)
	ctx.drawImage(img,kani.x,kani.y);
}

function reDraw(){
	moveKani(mouse.x, mouse.y);
	drawKani(mouse.x, mouse.y);
	setTimeout(reDraw, 10);
}

function onMouseMove(e){
	var width = $(window).width();
	var height = $(window).height();
	mouse.x = e.clientX/width*WIDTH-48;
	mouse.y = e.clientY/height*HEIGHT-20;
}

$(function(){
	canvas = [document.getElementById("back-canvas1"), document.getElementById("back-canvas2")];
	canvas[0].width = canvas[1].width = WIDTH;
	canvas[0].height = canvas[1].height = HEIGHT;
	context = [canvas[0].getContext("2d"), canvas[1].getContext("2d")];
	canvas_flip = 1;
	img = new Image();
	img.src = "umi_kani.png";
	jQuery("canvas").mousemove(onMouseMove);
	setTimeout(reDraw, 100);
});
})();
