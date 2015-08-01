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
            e.targetVM.is_drawing = true;
            context = e.targetVM.draw_context;
            e.targetVM.ex_point.x = e.layerX;
            e.targetVM.ex_point.y = e.layerY;
        },

        move: function(e){
            e.targetVM.draw(e);
        },

        stopDraw: function(e){
            e.targetVM.draw(e);
            e.targetVM.is_drawing = false;
        },

        draw: function(e){
            if(e.targetVM.is_drawing){
                var current_point = new Object();
                current_point.x = e.layerX;
                current_point.y = e.layerY;
                drawLine(e.targetVM.draw_context, e.targetVM.ex_point, current_point, 'rgba(255,255,255,1)', false);
                e.targetVM.ex_point = current_point;
            }
        }
    },
    ready: function(){
        var value = document.getElementById("line_width").value;
        document.getElementById("draw_canvas").getContext('2d').lineWidth = value;
        console.log(value);
    }
});