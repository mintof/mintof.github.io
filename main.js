$(function(){
	var canvas = document.getElementById("back-canvas");
	canvas.width = 480;
	canvas.height = 320;
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="rgb(200, 0, 0)";
	ctx.fillRect(20, 30, 370, 270);
});
