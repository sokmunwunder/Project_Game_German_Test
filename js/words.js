class Words {
    constructor(game, x, y, xSpeed, word, points){
     this.game = game;
     this.x = x;
     this.y = y;
     this.xSpeed = xSpeed;
     this.word = word;
     this.points = points;

     this.position= 0;
    }

    runLogic(){
     this.x -= this.xSpeed;
     if(this.x <= 0){this.x += this.xSpeed}
    }

}