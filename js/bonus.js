class Bonus {
    constructor(game, x, y, width, height, speed){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;

        this.positionChangeTimestamp = 0; 
        this.position = 0;
    }

    runLogic(){
        this.x -=this.speed;
    }

    draw(){
        if(Date.now()> this.positionChangeTimestamp +150){
            this.position = (this.position +1)%15;
            this.positionChangeTimestamp = Date.now();
        }
        this.game.context.save();
        this.game.context.drawImage(
            context.fillStyle ="green";
            // contex.fillRect(this.x, this.y, 100, 50);
            context.fillText =(Strandurlaub, this.x, this.y, 150);
        )
        this.game.context.restore();
    }
}