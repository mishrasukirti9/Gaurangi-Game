var stBg,rhymesImg,learningImg,swarImg,vyanjanImg,countingImg,alphabetsImg;
var rhymes,alphabets,counting,learning,swar,vyanjan;
var gameState=0;

function preload(){
    stBg=loadImage("IMAGES/bg1.jpg")
    rhymesImg=loadImage("IMAGES/rhymes.png")
    learningImg=loadImage("IMAGES/LEARNING.png")
    swarImg=loadImage("IMAGES/swar.png")
    vyanjanImg=loadImage("IMAGES/vyanjan.png")
    countingImg=loadImage("IMAGES/counting.PNG")
    alphabetsImg=loadImage("IMAGES/alphabets.jfif")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    rhymes = createSprite(130,100);
    rhymes.addImage(rhymesImg);
    rhymes.scale = 0.2
    rhymes.visible = false;

    learning = createSprite(width/2-300,height-130);
    learning.addImage(learningImg);
    learning.scale = 0.3
    learning.visible = false;

    swar = createSprite(width/2-100,100);
    swar.addImage(swarImg);
    swar.scale = 0.3
    swar.visible = false;

    vyanjan = createSprite(width/2+150,height-130);
    vyanjan.addImage(vyanjanImg);
    vyanjan.scale = 0.4
    vyanjan.visible = false;

    counting = createSprite(width-300,130);
    counting.addImage(countingImg);
    counting.scale = 0.5
    counting.visible = false;

    alphabets = createSprite(width-150,height-130);
    alphabets.addImage(alphabetsImg);
    alphabets.scale = 0.55
    alphabets.visible = false;
}

function draw(){
    if(gameState ===0){
    background(stBg);

    rhymes.visible = true;
    learning.visible = true;
    swar.visible = true;
    vyanjan.visible = true;
    counting.visible = true;
    alphabets.visible = true;

    if(mousePressedOver(rhymes)){
        gameState = 1
    }

    if(mousePressedOver(learning)){
        gameState = 2
    }

    if(mousePressedOver(swar)){
        gameState = 3
    }

    if(mousePressedOver(vyanjan)){
        gameState = 4
    }

    if(mousePressedOver(counting)){
        gameState = 5
    }

    if(mousePressedOver(alphabets)){
        gameState = 6
    }

    drawSprites();
    }
    if(gameState ===1){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;

    }
    if(gameState ===2){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;

    }
    if(gameState ===3){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;

    }
    if(gameState ===4){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;

    }
    if(gameState ===5){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;

    }
    if(gameState ===6){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;

    }
}