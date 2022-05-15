song1 = "";
song2 = "";

left_Wrist_x = "" ;
right_Wrist_x = "" ;

left_Wrist_y = "" ;
right_Wrist_y = "" ;


function preload() {
    song1 = loadSound("Savage Love.mp3");
    song2 = loadSound("Jugnu.mp3");

}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPosses);

}

function modelLoaded() {
    console.log('Model is Loaded');
}

function gotPosses(results) {
    if (results.length>0) {
        console.log(results);
        left_Wrist_x = results[0].pose.leftWrist.x;
        left_Wrist_y = results[0].pose.leftWrist.y;

        right_Wrist_x = results[0].pose.rightWrist.x;
        right_Wrist_y = results[0].pose.rightWrist.y;

       console.log("Left wrist x is "+ left_Wrist_x + " and Right wrist x is "+right_Wrist_x);
       console.log("Left wrist y is "+ left_Wrist_y + " and Right wrist y is "+right_Wrist_y);
       leftWristScore = results[0].pose.keypoints[9].score ; 
       rightWristScore = results[0].pose.keypoints[10].score ; 
       console.log(leftWristScore);
       console.log(rightWristScore);

         }

        }
        function draw() {
            image(video,0,0,600,500);
            fill("#384a59");
            stroke("#fa8682");
       
            if (leftWristScore>0.2) {
                circle(left_Wrist_x,left_Wrist_y,20);
                song1.play();
                song2.stop();

            }    
            if (rightWristScore>0.2) {
                    circle(right_Wrist_x,right_Wrist_y,20);
                    song2.play();
                    song1.stop();
            }

        }     