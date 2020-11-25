const playerImage = new Image();
playerImage.src = 'images/player1.jpg';

class Player {
    constructor(game, x, y, width, height){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.position= 0;
    }

    draw(){
       // this.game.context.drawImage(
        //context.fillStyle = "black";
        //context.fillRect(canvas.width/2, canvas.height/2, 50,50);
        //),
        this.game.context.drawImage(
        playerImage,
        20*this.position,
        0,
        50,
        50,
        this.x,
        this.y,
        this.width,
        this.height
        );
    }
}