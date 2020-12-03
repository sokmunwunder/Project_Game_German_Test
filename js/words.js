class Words {
  constructor(game, x, y, xSpeed) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.width = 100;
    this.height = 50;

    let wordsWithPlusTenPoints = [
      'Urlaub',
      'Sonne',
      'Flug',
      'Hotel',
      'Strand',
      'Meer',
      'Wandern',
      'Spielen',
      'Essen',
      'Schwimmen',
      'Eis',
      'Camping',
      'Wohnwagen',
      'Berg',
      'Insel'
    ];

    let wordsWithMinusTenPoints = [
      'Lernen',
      'Schule',
      'Bücher',
      'Grammatik',
      'Wortschatz',
      'Prüfung',
      'Lektion',
      'Lesen',
      'Schreiben',
      'Hören',
      'Vortrag',
      'Hausaufgabe',
      'Note',
      'Nomen',
      'Verben'
    ];

    let arrayWords = [
      /*'Urlaub',
      'Sonne',
      'Flug',
      'Hotel',
      'Bonus',
      'Lernen',
      'Schule',
      'Buch',
      'Grammatik',
      'Strand',
      'Meer',
      'Wortschatz',
      'Prüfung',
      'Lektion',
      'Lesen',
      'Schreiben',
      'Hören',
      'Wandern',
      'Spielen',
      'Essen',
      'Schwimmen',
      'Eis',
      'Camping',
      'Wohnwagen',
      'Berg',
      'Insel',
      'Vortrag',
      'Hausaufgabe',
      'Note',
      'Nomen',
      'Verben',
      'Bonus'*/
      'Fehler'
    ];

    let randomArrayWord =
      arrayWords[Math.floor(Math.random() * arrayWords.length)];
    this.value = randomArrayWord;

    //this.width = this.value.length * 30;
    //this.width = this.value.length + 30;
    // this.height = 64;
    //this.height = 64;
  }

  runWordsLogic() {
    this.x -= 1;
  }

  drawWordsLogic() {
    //this.game.context.font = `${this.height}px monospace`;
    this.game.context.fillStyle = 'slategrey';
    //this.game.context.strokeStyle = 'black';
    // this.game.context.strokeText(this.value, this.x, this.y);
    this.game.context.font = '24px, monospace';
    this.game.context.fillText(this.value, this.x, this.y);
  }
}

/*if (this.x < 0) {
      this.x += 1;
    }*/

//this.x -= this.xSpeed;
//let a = 0;

/* if (this.x <= this.game.canvas.width && this.x > 0) {
      this.x += 1;
    }*/
/* if (this.x <= 0) {
      this.x += 1 * (a + 1);
    }
    */
//this.game.runWordsLogic();

// console.log(this.x);

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

//let randomArrayWords = [];
//let randomIndex = Math.round(Math.random()*arrayWords.length);
//if (randomArrayWords.length === 0){
// randomArrayWords.unshift(arrayWords[randomIndex]);
//}
//else{
//randomArrayWords.shift();
//randomArrayWords.unshift(arrayWords[randomIndex]);
//this.game.context.runWordsLogic();
//context.strokeText = (randomArrayWords[0], this.x, this.y, 100)

// for(let i=0; i<=this.canvas.width; i++){
//if (this.x >= this.canvas.width){
//this.x -= this.xSpeed;
//  }
//if (this.x = 0){
// this.x += this.xSpeed * (this.wordMultiplyingSpeed *=1.01);
// }

// }

// this.x -= 1;
//if (this.x = 0){
//     this.x += 2;
//}
//if (this.x +100 = this.canvas.width)
//this.x. -= 3;
//}
// this.game.runWordsLogic();
//? Is this correct, or should I have runWordsLogic()?
