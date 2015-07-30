/**
 * Created by minto on 2015/07/29.
 */
function canvas_resize(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
}

function drawLine(context, st_point, end_point){
    for(var i=0; i<100; i++){
        var x = st_point.x + (end_point.x-st_point.x)/100*i;
        var y = st_point.y + (end_point.y-st_point.y)/100*i;
        var radius = context.lineWidth;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI*2, false);
        context.stroke();
    }
}