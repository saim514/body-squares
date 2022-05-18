function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(550,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('poses', gotPoses);
}

function draw()
{
    background('#1976D2')
}

function modelLoaded()
{
    console.log("Very good website for stretching arms!")
}

function gotPoses()
{
    if (results.length > 0)
    {
        console.log(results);
    } 
}

