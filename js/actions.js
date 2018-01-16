

var canvas = new fabric.Canvas('canvas');

function selectFiles(file) {
    var fr = new FileReader();
    fr.onload = function() {
        fabric.loadSVGFromString(fr.result, function(objects, options) {
            var obj = fabric.util.groupSVGElements(objects, options);

            obj.scaleToHeight(canvas.height-10)
                .set({ left: canvas.width/4, top: canvas.height/4 ,scaleX: 60 / obj.width,
                    scaleY: 60 / obj.height})
                .setCoords();

            canvas.add(obj).renderAll();
        });


    };
    fr.readAsText(file);
}
function addSVG(){
    var textarea = document.getElementById('textarea');
    var result = textarea.value;

        fabric.loadSVGFromString(result, function(objects, options) {
            var obj = fabric.util.groupSVGElements(objects, options);
            obj.scaleToHeight(canvas.height-10)
                .set({ left: canvas.width/4, top: canvas.height/4 ,scaleX: 60 / obj.width,
                    scaleY: 60 / obj.height})
                .setCoords();

            canvas.add(obj).renderAll();
            textarea.value = "";

        });





}

