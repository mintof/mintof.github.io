/**
 * Created by minto on 2015/07/29.
 */
function canvas_resize(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
}

function drawLine(context, st_point, end_point){
    context.beginPath();
    context.moveTo(st_point.x, st_point.y);
    context.lineTo(end_point.x, end_point.y);
    context.closePath();
    context.stroke();
}