(function (){

const WIDTH=480;
const HEIGHT=320;
const HORIZON_Y = 180;
const DECAY = 0.8;
const WAVE_W = 40;
const WAVE_H = 10;
const COROR = "rgb(0, 0, 0)";

var canvas;
var context;

function clear(){
	context.clearRect(0,0,WIDTH,HEIGHT);
}

function drawHorizon(){
	context.beginPath();
	context.moveTo(0,HORIZON_Y);
	context.lineTo(WIDTH, HORIZON_Y);
	context.stroke();
}

function drawWave(mouse_x, mouse_y){
	if(mouse_y<HORIZON_Y){
		drawHorizon();
		return;
	}

	context.beginPath();
	context.strokeStyle = COROR;
	context.moveTo(mouse_x-WAVE_W, HORIZON_Y);
	context.quadraticCurveTo(mouse_x, mouse_y+WAVE_H, mouse_x+WAVE_W, HORIZON_Y);
	var dir_x = -1;
	for(var i=0;i<2;i++){
		var x = mouse_x - WAVE_W;
		var cx = mouse_x;
		var cy = mouse_y+WAVE_H;
		var nx = mouse_x + WAVE_W;
		var h = mouse_y+WAVE_H-HORIZON_Y;
		var w = WAVE_W;
		var dir_y = 1;
		dir_x = -dir_x;
		if(i==1){
			context.moveTo(mouse_x-WAVE_W, HORIZON_Y);
			nx = x;
		}
		console.log(h,w);
		while(nx<WIDTH&&nx>=0&&h>=1&&w>=1){
			dir_y = -dir_y;
			h = h*DECAY;
			w = w*DECAY;
			x = nx;
			cx = x+w*dir_x;
			cy = HORIZON_Y+h*dir_y;
			nx = x+w*2*dir_x;
			context.quadraticCurveTo(cx, cy, nx, HORIZON_Y);
		}
		if(dir_x==1){
			context.lineTo(WIDTH,HORIZON_Y);
		}else{
			context.lineTo(0,HORIZON_Y);
		}
	}
	context.stroke();
}

function throttle(targetFunc, time) {
    var _time = time || 100;
    clearTimeout(this.timer);
    this.timer = setTimeout(function () {
        targetFunc();
    }, _time);
}

function onMouseMove(e){
	throttle(function(){
		var width = $(window).width();
		var height = $(window).height();
		var x = e.clientX/width*WIDTH;
		var y = e.clientY/height*HEIGHT;
		clear();
		console.log(x,y);
		drawWave(x,y);
	},15);
}

$(function(){
	canvas = document.getElementById("back-canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	context = canvas.getContext("2d");
	drawHorizon();
	drawWave(130, 270);
	canvas.addEventListener('mousemove', onMouseMove, false);
});
})();
