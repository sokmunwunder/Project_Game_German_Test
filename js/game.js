class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.reset();
    this.setKeyBindings();
  }

  reset() {
    this.player = new Player(
      this,
      50,
      this.canvas.height - 60,
      //this.canvas.width / 2 + 50 / 2,
      //this.canvas.height / 2 - 25,
      45,
      60
    );
    this.score = 150;
    this.words = [];
    this.wordStartingSpeed = 1;
    this.active = true;
    for (let i = 0; i <= 10; i++) {
      const wordY = i * 50;
      this.addWord(wordY);
    }
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.player.y -= 10;
          console.log('key-up');
          break;
        case 'ArrowDown':
          this.player.y += 10;
          console.log('key-down');
          break;
        case 'ArrowRight':
          this.player.x += 10;
          console.log('key-right');
          break;
        case 'ArrowLeft':
          this.player.x -= 10;
          console.log('key-left');
          break;
      }

      this.player.y = Math.min(this.player.y, this.canvas.height - 60);
      this.player.y = Math.max(this.player.y, 0);
      this.player.x = Math.min(this.player.x, this.canvas.width - 45);
      this.player.x = Math.max(this.player.x, 0);

      //Math.max(this.player.y, 100) &&
      // Math.min(this.player.y, this.canvas.height - 50);
    });
  }

  addWord(wordY) {
    //this.player.y = (i*50)};
    const word = new Words(
      this,
      this.canvas.width,
      wordY,
      this.wordStartingSpeed,
      this.yPositionWhenTakenOut
    );
    this.words.push(word);
    //console.log(this.words);
  }

  loop() {
    // this.reset();
    this.runLogic();
    this.draw();
    if (this.active && this.score >= 0) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 30);
      //window.requestAnimationFrame(() => {
      //screenPlayElement.style.display = 'none';
      // console.log('check if loop works');
      //this.loop();
      //});
    } else if (this.score === 200) {
      screenPassTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
    } else if (this.score < 0) {
      //screenPlayElement.style.display = 'none';
      //if (this.score===0){
      screenFailedTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
    }
  }

  // screenPlayElement.style.display ='none';
  // screenGameOverElement.style.display

  checkIntersectionBetweenPlayerAndGoodWords() {
    for (let word of this.words) {
      let wordsWithPlusTenPoints = ['Urlaub', 'Sonne', 'Flug', 'Hotel'];

      if (
        (wordsWithPlusTenPoints.includes(word.value) &&
          this.player.x >= word.x) ||
        word.x + 100 > this.player.x
      ) {
        this.score += 10;
        const indexOfWords = this.words.indexOf(word);
        const yPositionWhenTakenOut = word.wordY;
        this.words.splice(indexOfWords, 1);
        this.addWord(yPositionWhenTakenOut);
      }
    }
  }

  checkIntersectionBetweenPlayerAndBadWords() {
    let wordsWithMinusTenPoints = ['Lernen', 'Schule', 'Buch', 'Grammatik'];
    for (let word of this.words) {
      if (
        wordsWithMinusTenPoints.includes(word.value) &&
        this.player.x >= word.x
        // || word.x + 100 > this.player.x
      ) {
        this.score -= 1;
      }
    }
  }

  drawScore() {
    this.context.fillStyle = 'black';
    this.context.font = '60px Architects Daughter';
    this.context.fillText(this.score, 350, 45);
  }

  runLogic() {
    //this.reset();
    // this.addWords();
    // console.log('test');
    for (let word of this.words) {
      word.runWordsLogic();
    }
    this.checkIntersectionBetweenPlayerAndBadWords();
    /*
    this.checkIntersectionBetweenPlayerAndGoodWords();
    */
    if (this.score < 0) {
      this.active = false;
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let word of this.words) {
      word.drawWordsLogic();
    }
    this.player.draw();
    this.drawScore();
  }
}

//const currentTimeStamp = Date.now();
//if(
//currentTimeStamp >
//this.lastWordTimeStamp + this.intervalBetweenWords
//)
// for(let i=0; i<=this.canvas.width; i++){
//if (this.x >= this.canvas.width){
// this.x -= this.xSpeed;
// }
// if (this.x = 0){
// this.x += this.xSpeed * (this.wordMultiplyingSpeed *=1.01);
// }
//{
// const word = new Words(
// this,
// this.canvas.width,
// Math.random()*(this.canvas.height),
// ? need to do upper and lower limits of Math.random
// this.wordStartingSpeed
// );
// this.words.push(word);
// this.lastWordTimeStamp = currentTimeStamp;
//}
