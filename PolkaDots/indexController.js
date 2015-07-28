new Vue({
    el: "#picture",
    data:{
        picture: new Image(),
        width: 100,
        height: 100,
        context: document.getElementById("canvas").getContext('2d')
    },
    methods:{
        onClick: function(e){
            console.log("event");
            context = e.targetVM.context;
            context.beginPath();
            context.moveTo(20, 20);
            context.lineTo(120, 20);
            context.lineTo(120, 120);
            context.lineTo(20, 120);
            context.closePath();
            context.stroke();
        }
    }
})