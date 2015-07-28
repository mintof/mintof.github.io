var canvas_vue = new Vue({
    el: "#picture",
    data:{
        picture: new Image(),
        width: 1000,
        height: 1000,
        context: document.getElementById("canvas").getContext('2d'),
        ex_point: {"x":0, "y":0},
        is_drawing: false
    },
    methods:{
        startDraw: function(e){
            console.log("mouseUp");
            console.log(e);
            e.targetVM.is_drawing = true;
            context = e.targetVM.context;
            e.targetVM.ex_point.x = e.layerX;
            e.targetVM.ex_point.y = e.layerY;
        },
        draw: function(e){
            console.log("mouseMove");
            if(e.targetVM.is_drawing){
                var context = e.targetVM.context;
                var ex_point = e.targetVM.ex_point;
                var current_point = new Object()
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
            e.targetVM.is_drawing = false;
        }
    }
});

$(document).ready(function(){
    $("#canvas").mouseout(function(){
        canvas_vue.is_drawing = false;
    });
});
