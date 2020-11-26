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
        let holidayWords = ["Urlaub", "Sonne", "Flug", "Hotel"];
        for (let i=0; i<=holidayWords.length; i++){
            let holidayWordsIndex = holidayWords[i];
            context.fillStyle = "green";
            context.fillText = (holidayWordsIndex, this.x, this.y, 100);
        }
    }
       

    drawStudyWords(){
        let studyWords = ["Lernen", "Schule", "Buch", "Grammatik" ];
        for (let i=0; i<=studyWords.length; i++){
        let studyWordsIndex = studyWords[i];
        context.fillStyle = "red";
        context.strokeText = (studyWordsIndex, this.x, this.y, 100);
        }
        
    }
    
}