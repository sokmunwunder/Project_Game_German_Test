class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.reset();
    this.setKeyBindings();
  }

  reset() {
    this.player = new Player(this, 50, this.canvas.height - 60, 45, 60);

    // !!Need to change how words are added !!
    this.score = 190;
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
          this.player.y -= 20;
          console.log('key-up');
          break;
        case 'ArrowDown':
          this.player.y += 20;
          console.log('key-down');
          break;
        case 'ArrowRight':
          this.player.x += 20;
          console.log('key-right');
          break;
        case 'ArrowLeft':
          this.player.x -= 20;
          console.log('key-left');
          break;
      }

      this.player.y = Math.min(this.player.y, this.canvas.height - 60);
      this.player.y = Math.max(this.player.y, 0);
      this.player.x = Math.min(this.player.x, this.canvas.width - 45);
      this.player.x = Math.max(this.player.x, 0);
    });
  }

  addWord(wordY) {
    const word = new Words(
      this,
      this.canvas.width,
      wordY,
      this.wordStartingSpeed
      //this.yPositionWhenTakenOut
    );
    this.words.push(word);
  }

  loop() {
    this.runLogic();
    this.draw();
    // if (this.active && this.score >= 0 && this.score < 200) {
    if (this.active && this.score >= 0) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 30);
    }
    //window.requestAnimationFrame(() => {
    //screenPlayElement.style.display = 'none';
    //console.log('check if loop works');
    //this.loop();
    //});
    // else if ((this.score = 200)) {
    //screenPassTestElement.style.display = 'initial';
    // screenPlayElement.style.display = 'none';
    //} else if (this.score < 0) {
    //  screenFailedTestElement.style.display = 'initial';
    // screenPlayElement.style.display = 'none';
    // }
  }

  checkIntersectionBetweenPlayerAndGoodWords() {
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
      'Schwimmen'
    ];

    for (let word of this.words) {
      if (
        wordsWithPlusTenPoints.includes(word.value) &&
        this.player.x + this.player.width >= word.x &&
        this.player.x <= word.x + word.width &&
        this.player.y + this.player.height >= word.y &&
        this.player.y <= word.y + 50
      ) {
        this.score += 10;
        const indexOfWord = this.words.indexOf(word);
        this.words.splice(indexOfWord, 1);
      }
    }
  }
  // Codes from line 99 to 104 work
  // if (
  //wordsWithPlusTenPoints.includes(word.value) &&
  // this.player.x >= word.x
  //) {
  //   this.score += 10;
  // }

  checkIntersectionBetweenPlayerAndBadWords() {
    let wordsWithMinusTenPoints = [
      'Lernen',
      'Schule',
      'Buch',
      'Grammatik',
      'Wortschatz',
      'Prüfung',
      'Lektion',
      'Lesen',
      'Schreiben',
      'Hören'
    ];

    for (let word of this.words) {
      if (
        wordsWithMinusTenPoints.includes(word.value) &&
        this.player.x + this.player.width >= word.x &&
        this.player.x <= word.x + word.width &&
        this.player.y + this.player.height >= word.y &&
        this.player.y <= word.y + 50
      ) {
        this.score -= 10;
        const indexOfWord = this.words.indexOf(word);
        this.words.splice(indexOfWord, 1);
      }
    }
  }
  // Lines 122 to 129 are good codes that should be reactivated if my codes don't work to run the game
  // for (let word of this.words) {
  // if (
  // wordsWithMinusTenPoints.includes(word.value) &&
  // this.player.x >= word.x
  //) {
  //  this.score -= 1;
  // }
  //}

  // Lines 159 to 166 are good codes
  // collectUnusedWords() {
  //for (let word of this.words) {
  // if (word.x <0) {
  // const indexOfWord = this.words.indexOf(word);
  // this.words.splice(indexOfWord, 1);
  //}
  //}
  // }
  collectUnusedWords() {
    for (let word of this.words) {
      if (word.x === 5) {
        let uncollectedWords = [];
        uncollectedWords.push(word);
        //uncollectedWords.shift();
        const indexOfWord = uncollectedWords.indexOf(word);
        uncollectedWords.splice(indexOfWord, 1);
        console.log(`${uncollectedWords.length}`);
      }
    }
  }

  drawScore() {
    this.context.fillStyle = 'navy';
    this.context.font = '40px monospace';
    this.context.fillText(this.score, 350, 45);
  }

  runLogic() {
    for (let word of this.words) {
      word.runWordsLogic();
    }
    this.collectUnusedWords();
    this.checkIntersectionBetweenPlayerAndBadWords();

    this.checkIntersectionBetweenPlayerAndGoodWords();

    if (this.score <= 0) {
      screenFailedTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
    }

    if (this.score >= 200) {
      screenPassTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
    }
    //if (this.score < 0 || this.score > 200) {
    // this.active = false;
    //}

    //if (this.score < 0 ) {
    // this.active = false;
    //}
    /* if (this.score === 300) {
        this.active = false;
    } */
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
