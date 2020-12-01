class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.reset();
    this.setKeyBindings();
  }

  // Original reset() codes which worked and should be reactivated if my new codes don't work
  //reset() {
  // this.player = new Player(this, 50, this.canvas.height - 60, 45, 60);
  // this.score = 150;
  // this.words = [];
  // this.wordStartingSpeed = 1;
  // this.active = true;

  // for (let i = 0; i <= 8; i++) {
  //   const wordY = i * 80;
  //   this.addWord(wordY);
  // }
  // }

  reset() {
    this.player = new Player(this, 50, this.canvas.height - 60, 45, 60);
    this.lastWordTimeStamp = 0;
    this.intervalBetweenWords = 3000;
    this.wordStartingSpeed = 1;
    this.words = [];
    this.score = 150;
    this.active = true;

    //for (let i = 0; i <= 8; i++) {
    // const wordY = i * 80;
    //  this.addWord(wordY);
    //}
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

  // Lines 66 to 74 are original codes which work and should be reactivated if my new codes don't work
  //addWord(wordY) {
  //const word = new Words(
  // this,
  // this.canvas.width,
  // wordY,
  //this.wordStartingSpeed
  // );
  //  this.words.push(word);
  // }

  addWord() {
    //for (let i = 0; i <= 8; i++) {
    //const wordY = i * 80;
    // this.addWord(wordY);
    //}
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastWordTimeStamp + this.intervalBetweenWords) {
      const randomY = Math.random() * (this.canvas.height - 50);
      const word = new Words(
        this,
        this.canvas.width,
        //wordY,
        randomY,
        this.wordStartingSpeed
      );
      this.words.push(word);
      this.lastWordTimestamp = currentTimeStamp;
    }
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

  // These lines are good codes currently being replaced by codes below
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

  // These runLogic() codes work and should be reactivated if the new codes do not work
  //runLogic() {
  // for (let word of this.words) {
  //   word.runWordsLogic();
  // }
  // this.collectUnusedWords();
  //this.checkIntersectionBetweenPlayerAndBadWords();

  // this.checkIntersectionBetweenPlayerAndGoodWords();

  // if (this.score <= 0) {
  // screenFailedTestElement.style.display = 'initial';
  // screenPlayElement.style.display = 'none';
  //}

  // if (this.score >= 200) {
  //  screenPassTestElement.style.display = 'initial';
  //  screenPlayElement.style.display = 'none';
  //}
  //}

  runLogic() {
    this.collectUnusedWords();
    this.addWord();
    for (let word of this.words) {
      word.runWordsLogic();
    }
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

//if (this.score < 0 || this.score > 200) {
// this.active = false;
//}

//if (this.score < 0 ) {
// this.active = false;
//}
/* if (this.score === 300) {
        this.active = false;
    } */

// Lines 122 to 129 are good codes that should be reactivated if my codes don't work to run the game
// for (let word of this.words) {
// if (
// wordsWithMinusTenPoints.includes(word.value) &&
// this.player.x >= word.x
//) {
//  this.score -= 1;
// }
//}

// Codes from line 99 to 104 work
// if (
//wordsWithPlusTenPoints.includes(word.value) &&
// this.player.x >= word.x
//) {
//   this.score += 10;
// }

// These codes (lines 18-22) of i <=8, i*80 works on the screen.
//for (let i = 0; i <= 8; i++) {
//const wordY = i * 80;
//  this.addWord(wordY);
//}

// for (let i = 0; i <= 10; i++) {
//  const wordY = i * 50;
// this.addWord(wordY);
//}
