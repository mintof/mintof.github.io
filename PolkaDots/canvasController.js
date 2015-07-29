var canvas_vue = new Vue({
    el: "#canvases",
    data:{
        picture: new Image(),
        draw_context: document.getElementById("draw_canvas").getContext('2d'),
        picture_context: document.getElementById("picture_canvas").getContext('2d'),
        draw_canvas: document.getElementById("draw_canvas"),
        picture_canvas: document.getElementById("picture_canvas"),
        ex_point: {"x":0, "y":0},
        is_drawing: false
    },
    methods:{
        startDraw: function(e){
            console.log("mouseUp");
            console.log(e);
            e.targetVM.is_drawing = true;
            context = e.targetVM.draw_context;
            e.targetVM.ex_point.x = e.layerX;
            e.targetVM.ex_point.y = e.layerY;
        },
        draw: function(e){
            console.log("mouseMove");
            if(e.targetVM.is_drawing){
                var context = e.targetVM.draw_context;
                context.linewidth = 20;
                var ex_point = e.targetVM.ex_point;
                var current_point = new Object();
                current_point.x = e.layerX;
                current_point.y = e.layerY;
                context.beginPath();
                context.moveTo(ex_point.x, ex_point.y);
                context.lineTo(current_point.x, current_point.y);
                context.closePath();
                context.stroke();
                e.targetVM.ex_point = current_point;
            }
        },
        stopDraw: function(e){
            console.log("mouseDown");
            if(e.targetVM.is_drawing){
                var context = e.targetVM.draw_context;
                context.linewidth = 20;
                var ex_point = e.targetVM.ex_point;
                var current_point = new Object();
                current_point.x = e.layerX;
                current_point.y = e.layerY;
                context.beginPath();
                context.moveTo(ex_point.x, ex_point.y);
                context.lineTo(current_point.x, current_point.y);
                context.closePath();
                context.stroke();
                e.targetVM.ex_point = current_point;
            }
            e.targetVM.is_drawing = false;
        },
        inputFile: function(e){
            console.log("input File");
            var file = e.target.files[0];
            if(!file.type.match('image.*')){
                return;
            }
            var reader = new FileReader();
            reader.onload = function(){
                var image = new Image();
                image.src = this.result;
                var width = image.width;
                var height = image.height;
                canvas_resize(canvas_vue.picture_canvas, width, height);
                canvas_resize(canvas_vue.draw_canvas, width, height);
                var context = document.getElementById("picture_canvas").getContext('2d');
                context.drawImage(image, 0, 0);
            }
            reader.readAsDataURL(file);

        }
    }
});

function canvas_resize(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
}