/**
 * Created by minto on 2015/08/01.
 */
var form_vue = new Vue({
    el: "#canvases_form",
    data:{
    },
    methods:{
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
                canvas_resize(polka_vue.canvas, width, height);
                var context = document.getElementById("picture_canvas").getContext('2d');
                context.drawImage(image, 0, 0);
            }
            reader.readAsDataURL(file);
        },

        changeLineBold: function(e) {
            var value = e.target.value;
            canvas_vue.draw_context.lineWidth = value;
        },

        changePen: function (e) {
            var value = e.target.value;
            var context = canvas_vue.draw_context;
            if(value=="pen"){
                context.globalCompositeOperation = 'source-over';
            }else{
                context.globalCompositeOperation = 'destination-out';
            }
        },

        changeColor: function(e){
            var value = e.target.value;
            var context = canvas_vue.draw_context;
            context.fillStyle = value;
            context.strokeStyle = value;
        },

        create: function(e){
            var were_painted = getWerePainted(canvas_vue.draw_canvas);
            var polka_dots = createPolkaDots(were_painted);
        }
    }
});