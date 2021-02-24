var ball;
var detabase,position;
function setup(){
    database= firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref('ball/position');
    ballposition.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        rightPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        rightPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        rightPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        rightPosition(0,+1);
    }
}
    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball.x = position.x ;
    ball.y = position.y ;
}
function rightPosition(x,y){
database.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y
})
}
function showError(){
    console.log("error in writing to the database")
}
