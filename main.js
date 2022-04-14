img="";
status="";
function preload(){
    img=loadImage('image.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420)
    fill("#FF7F50");
    text("M S Dhoni",45,75);
    noFill();
    stroke("#FF7F50");
    rect(30,60,300,340);

    fill("#FF7F50");
    text("Virat Kohli",380,80);
    noFill();
    stroke("#FF7F50");
    rect(350,60,300,340);
}