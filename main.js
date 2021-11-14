function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    imageClassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cr_osE6C-/model.json", modelloaded);
    video = createCapture(VIDEO);
    video.hide();

}

function preload() {

}

function draw() {
    image(video, 0, 0, 300, 300);
    imageClassifier.classify(video, result);
}

function result(error, result) {
if(error){
    console.error("There is and error!");
}
else{
    document.getElementById("ObjectName").innerHTML= result[0].label;
    document.getElementById("Accuracy").innerHTML= result[0].confidence.toFixed(2);
}
}


function modelloaded() {
    console.log("You are here!");
}