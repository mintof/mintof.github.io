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

//
//return bool pixels[height][width]
function getWerePainted(canvas){
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var width = imageData.width;
    var height = imageData.height;
    var pixels = imageData.data;

    var were_painted = new Array(height);

    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            were_painted[y] = new Array(width);
            var base = (y * width + x) * 4;
            var flg = false;
            //0 0 0 0‚Å‰½‚à“h‚Á‚Ä‚È‚¢êŠ
            for(var i=0;i<4;i++){
                if(pixels[base+i]!=0){
                    flg=true;
                }
            }
            were_painted[y][x] = flg;
        }
    }
    return were_painted;
}