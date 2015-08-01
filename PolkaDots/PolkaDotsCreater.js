/**
 * Created by minto on 2015/08/01.
 */

/**return polkaDots[]
    polkaDot(polkaDots[i]) has
        x,
        y,
        radius
 **/
function createPolkaDots(were_painted, polka_canvas, picture_canvas){
    var polka_dots = new Array();

    drawPolkaDots(polka_canvas, picture_canvas, polka_dots);
}

/**
 * draw ero picture 114514
 * @param canvas
 * @param image
 * @param polkaDots
 */
function drawPolkaDots(polka_canvas, picture_canvas, polka_dots){
    var width = picture_canvas.width;
    var height = picture_canvas.height;
    canvas.width = width;
    canvas.height = height;
    var image = new Image();
    image.src = picture_canvas.toDataURL("");
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    for(var dot in polka_dots){

    }
}