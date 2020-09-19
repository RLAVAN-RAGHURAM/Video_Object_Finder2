video="";
objects=[];
status="";
percent="";
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
}
function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Object";
}
function modelLoaded(){
console.log("modeloaded");
status=true;
video.volume(0);
video.speed(1);
video.loop();
}
function gotResult(error,results){
if (error){
console.log(error);
}
console.log(results);
objects=results;
}
    


function draw(){
image(video,0,0,480,380); 
if(status!="")
{
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
document.getElementById("Number_of_object").innerHTML="Number of objects in the Screen : "+objects.length;
document.getElementById("status").innerHTML="Object Detected";
fill("#1cb8b8");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#1cb8b8");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}


