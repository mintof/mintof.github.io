new Vue({
    el: "#picture",
    data:{
        picture: new Image(),
        width: 1000,
        height: 1000,
        context: document.getElementById("canvas").getContext('2d'),
        ex_point: {"x":0, "y":0},
        is_down: false
    },
    methods:{
        startDraw: function(e){
            console.log("mouseUp");
            console.log(e);
            e.targetVM.is_down = true;
            context = e.targetVM.context;
            e.targetVM.ex_point.x = e.layerX;
            e.targetVM.ex_point.y = e.layerY;
            /*context.beginPath();
            context.moveTo(20, 20);
            context.lineTo(120, 20);
            context.lineTo(120, 120);
            context.lineTo(20, 120);
            context.closePath();
            context.stroke();*/
        },
        draw: function(e){
            console.log("mouseMove");
            if(e.targetVM.is_down){
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
            e.targetVM.is_down = false;
        }
    }
})

