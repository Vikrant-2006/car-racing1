var gameState = 0;
var playercount;
var database;
var form, player, game;
var allplayers;
var distance = 0;
var car1,car2,car3,car4;
var cars;
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
    if(playercount===4){
        game.update(1);
    }
    if(gameState===1){
     clear();
     game.play();
    }
}

