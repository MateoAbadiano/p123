var rightWristX=0;
var leftWristX=0;
var difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded()
{
    console.log('poseNet is initialized')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+" rightWristX="+rightWristX)
    }
}

function draw()
{
    background('black');
    document.getElementById("font_size").innerHTML="the font size of our text will be= "+difference+"px";
    fill('#F9093');
    textSize(difference);
    text('Miracle',50,400);
}