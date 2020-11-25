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

    }
    runLogic(){
    this.x -= this.xSpeed;
    if(this.x < = 0){this.x += this.xSpeed};
    if(this.x > this.canvas.width){this.x -= this.xSpeed};
    // need to deduct length of word
}
    holidayWords(){
        context.fillStyle = "green";
        context.strokeText = (Urlaub, 100, 50);

    studyWords(){
        context.fillStyle = "red";
        context.strokeText = (Lernen, 100, 50);
    }
    
}