class Words {
    constructor(game, x, y, xSpeed){
     this.game = game;
     this.x = x;
     this.y = y;
     this.xSpeed = xSpeed;
     this.word = word;
     this.points = 0;

     this.position= 0;
    }

    }
    //runLogic(){
    //this.x -= this.xSpeed;
    //if(this.x < = 0){this.x += this.xSpeed};
    //if(this.x > this.canvas.width){this.x -= this.xSpeed};
    // need to deduct length of word
    //}

    runHolidayWordsLogic(){
        this.x -= this.xSpeed;
        if(this.x <=0){
            this.x += this.xSpeed};
    }

    runStudyWordsLogic(){
        this.x += this.xSpeed;
        if(this.x +100 > canvas.width){
            this.x -=this.xSpeed};
    };

    drawHolidayWords(){
        context.fillStyle = "green";
        context.fillText = (Urlaub, this.x, this.y, 100);

    drawStudyWords(){
        context.fillStyle = "red";
        context.strokeText = (Lernen, this.x, this.y, 100);
    }
    
}