class Words {
    constructor(game, x, y, xSpeed){
     this.game = game;
     this.x = x;
     this.y = y;
     this.xSpeed = xSpeed;
     //this.points = 0;
     //this.position= 0;
     //this.positionChangeTimestamp = 0;
    }

    runWordsLogic(){
        this.x += 1;
        let wordsWithPlusTenPoints = ["Urlaub", "Sonne", "Flug", "Hotel"];
        let wordsWithMinusTenPoints = ["Lernen", "Schule", "Buch", "Grammatik" ];
        let arrayWords = [" ", "Urlaub", "Sonne", "Flug", "Hotel","Lernen", "Schule", "Buch", "Grammatik" ];
        let randomArrayWord = arrayWords[Math.round(Math.random()*arrayWords.length];
        //let randomArrayWords = [];
        //let randomIndex = Math.round(Math.random()*arrayWords.length);
        //if (randomArrayWords.length === 0){
           // randomArrayWords.unshift(arrayWords[randomIndex]);
        //}
        //else{
            //randomArrayWords.shift();
            //randomArrayWords.unshift(arrayWords[randomIndex]);
        }
        //randomArrayWords.push(arrayWords[Math.round(Math.random()*arrayWords.length)]);
        
    }


    drawWordsLogic(){
     
         //if (Date(now) >this.positionChange+150){
           //  this.position =(this.position +1)%15;
           //  this.positionChangeTimestamp= Date.now();
        // }
        this.runWordsLogic();
        context.fillStyle = "black";
        //context.strokeText = (randomArrayWords[0], this.x, this.y, 100)
        context.strokeText = (randomArrayWord, this.x, this.y, 100)
    }
    }

    //runLogic(){
    //this.x -= this.xSpeed;
    //if(this.x < = 0){this.x += this.xSpeed};
    //if(this.x > this.canvas.width){this.x -= this.xSpeed};
    // need to deduct length of word
    //}

   // runHolidayWordsLogic(){
       // this.x -= this.xSpeed;
       // if(this.x <=0){
           // this.x += this.xSpeed};
    //}

    //runStudyWordsLogic(){
        //this.x -= this.xSpeed;
       // if(this.x +100 > canvas.width){
           // this.x -=this.xSpeed};
    //};

    //drawHolidayWords(){
        //let holidayWords = ["Urlaub", "Sonne", "Flug", "Hotel"];
        //for (let i=0; i<=holidayWords.length; i++){
            //let holidayWordsIndex = holidayWords[i];
           // context.fillStyle = "black";
           // context.fillText = (holidayWordsIndex, this.x, this.y, 100);
        //}
    //}
       
    //drawStudyWords(){
        //let studyWords = ["Lernen", "Schule", "Buch", "Grammatik" ];
        //for (let i=0; i<=studyWords.length; i++){
        //let studyWordsIndex = studyWords[i];
        //context.fillStyle = "black";
        //context.strokeText = (studyWordsIndex, this.x, this.y, 100);
        //}
        
   // }
    
