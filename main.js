noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWrist=0;

function setup ()  {
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,550);

    posenet=ml5.poseNet('video',modalLoaded);
    posenet.on('pose',gotPoses);
}

function modalLoaded(){
    console.log('Posenet is intialized');
}

 function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference );

    }
 }

 function draw(){
    background('4, 181, 163');

    document.getElementById("square_side").innerHTML = " Width and Height of a Square will be = " + difference + " px ";
    fill('12, 132, 166');
    stroke('12, 132, 166');
    square( noseX , noseY , difference);
 }
