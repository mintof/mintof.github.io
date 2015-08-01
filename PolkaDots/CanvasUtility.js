/**
 * Created by minto on 2015/07/29.
 */
function canvas_resize(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
}

function drawLine(context, st_point, end_point, color, is_rub){
    var dx = end_point.x-st_point.x;
    var dy = end_point.y-st_point.y;
    var len = Math.sqrt(dx*dx+dy*dy);
    for(var i=0; i<len; i++){
        var x = st_point.x + dx/len*i;
        var y = st_point.y + dy/len*i;
        var radius = context.lineWidth;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI*2, false);
        context.fill();
        context.stroke();
    }
}