rightWristX = 0;
rightWristY = 0;
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
    }
    
    function draw(){
    image(video,0,0,500,500);
    }
    
    function preload(){
    song = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3")
    }
    
    song = "";
    song2 = "";
    
    function play(){
    song.play();
    song.setVolume(1);
song.rate(1);
    }
    
    function pause(){
        song.pause();
    }

    function modelLoaded(){
        console.log("modelLoaded!");
    }

    function gotPoses(results){
        if(results.length > 0){
               console.log(results);
               rightWristX = results[0].pose.rightWrist.x;
               rightWristY = results[0].pose.rightWrist.y;
               console.log("rightWrist x = "+rightWristX+"rightWrist y = "+rightWristY);
           }
       }