const congratsSound = new Audio('sounds/congrats.wav');

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.reset();
    this.setKeyBindings();
    //this.active = true;
  }

  reset() {
    this.player = new Player(this, 60, this.canvas.height - 75, 60, 75);
    this.lastWordTimeStamp = 0;
    this.intervalBetweenWords = 6500;
    this.wordStartingSpeed = 300;
    this.words = [];
    this.score = 100;
    this.active = true;
    this.wordLength = 0;
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
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

      this.player.y = Math.min(this.player.y, this.canvas.height - 75);
      this.player.y = Math.max(this.player.y, 0);
      this.player.x = Math.min(this.player.x, this.canvas.width - 60);
      this.player.x = Math.max(this.player.x, 0);
    });
  }

  addWord() {
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastWordTimeStamp + this.intervalBetweenWords) {
      let randomY = Math.max(
        Math.floor(Math.random() * (this.canvas.height - 50)),
        150
      );
      const word = new Words(
        this,
        this.canvas.width + this.wordLength,
        // Math.floor(Math.random() * (this.canvas.height - 50)),
        randomY,
        this.wordStartingSpeed
      );
      this.words.push(word);
      this.lastWordTimeStamp = currentTimeStamp;
    }
  }

  // Good codes to be reactivated if my attempt at fixing interval speed does not work
  /* addWord() {
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastWordTimeStamp + this.intervalBetweenWords) {
      let randomY = Math.max(
        Math.floor(Math.random() * (this.canvas.height - 50)),
        150
      );
      const word = new Words(
        this,
        this.canvas.width,
        // Math.floor(Math.random() * (this.canvas.height - 50)),
        randomY,
        this.wordStartingSpeed
      );
      this.words.push(word);
      this.lastWordTimeStamp = currentTimeStamp;
    }
  }*/

  loop() {
    this.runLogic();
    this.draw();
    if (this.active && this.score >= 0) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 30);
    }
  }

  checkIntersectionBetweenPlayerAndBonusPoints() {
    for (let word of this.words) {
      if (
        word.value === 'Bonus       ' &&
        this.player.x + this.player.width >= word.x &&
        this.player.x <= word.x + word.width &&
        this.player.y + this.player.height >= word.y &&
        this.player.y <= word.y + word.height
      ) {
        console.log('positive');
        this.score += 30;
        const indexOfWord = this.words.indexOf(word);
        this.words.splice(indexOfWord, 1);
      }
    }
  }

  checkIntersectionBetweenPlayerAndDemeritPoints() {
    for (let word of this.words) {
      if (
        word.value === 'Fehler       ' &&
        this.player.x + this.player.width >= word.x &&
        this.player.x <= word.x + word.width &&
        this.player.y + this.player.height >= word.y &&
        this.player.y <= word.y + word.height
      ) {
        console.log('test');
        this.score -= 50;
        const indexOfWord = this.words.indexOf(word);
        this.words.splice(indexOfWord, 1);
      }
    }
  }

  checkIntersectionBetweenPlayerAndGoodWords() {
    let wordsWithPlusTenPoints = [
      'Urlaub       ',
      'Sonne       ',
      'Flug       ',
      'Hotel       ',
      'Strand       ',
      'Meer       ',
      'Wandern        ',
      'Spielen       ',
      'Reise        ',
      'Museen        ',
      'Eis       ',
      'Camping       ',
      'Grillen       ',
      'Berg        ',
      'Insel       '
    ];
    for (let word of this.words) {
      if (
        wordsWithPlusTenPoints.includes(word.value) &&
        this.player.x + this.player.width >= word.x &&
        this.player.x <= word.x + word.width &&
        this.player.y + this.player.height >= word.y &&
        this.player.y <= word.y + word.height
      ) {
        this.score += 10;
        const indexOfWord = this.words.indexOf(word);
        this.words.splice(indexOfWord, 1);
      }
    }
  }

  checkIntersectionBetweenPlayerAndBadWords() {
    let wordsWithMinusTenPoints = [
      'Lernen      ',
      'Schule       ',
      'Buch       ',
      'Lehrer       ',
      'Wörter       ',
      'Prüfung       ',
      'Lektion       ',
      'Lesen        ',
      'Klasse       ',
      'Hören       ',
      'Vortrag       ',
      'Aufgabe       ',
      'Note       ',
      'Nomen        ',
      'Verben       '
    ];

    for (let word of this.words) {
      if (
        wordsWithMinusTenPoints.includes(word.value) &&
        this.player.x + this.player.width >= word.x &&
        this.player.x <= word.x + word.width &&
        this.player.y + this.player.height >= word.y &&
        this.player.y <= word.y + word.height
      ) {
        this.score -= 10;
        const indexOfWord = this.words.indexOf(word);
        this.words.splice(indexOfWord, 1);
      }
    }
  }

  collectUnusedWords() {
    for (let word of this.words) {
      if (word.x <= 5) {
        this.words.splice(this.words.indexOf(word), 1);
      }
    }
  }

  drawScore() {
    this.context.fillStyle = 'lightgreen';
    this.context.fillRect(350, 0, 130, 70);
    this.context.fillStyle = 'pink';
    this.context.fillRect(0, 250, 50, 200);
    this.context.fillStyle = 'lightskyblue';
    this.context.fillRect(750, 200, 50, 150);
    this.context.fillStyle = 'navy';
    this.context.font = '40px monospace';
    this.context.fillText(this.score, 380, 45);
  }

  runLogic() {
    this.addWord();
    for (let word of this.words) {
      word.runWordsLogic();
    }
    this.collectUnusedWords();
    this.checkIntersectionBetweenPlayerAndBadWords();
    this.checkIntersectionBetweenPlayerAndGoodWords();
    this.checkIntersectionBetweenPlayerAndBonusPoints();
    this.checkIntersectionBetweenPlayerAndDemeritPoints();
    if (this.score <= 0) {
      screenFailedTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
      //failureSound.play();
      //console.log('sound test');
    }
    if (this.score >= 200) {
      screenPassTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
      congratsSound.play();
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawScore();
    for (let word of this.words) {
      word.drawWordsLogic();
    }
    this.player.draw();
    //this.drawScore();
  }
}

//runLogic() {
// this.collectUnusedWords();
// this.addWord();
//for (let word of this.words) {
// word.runWordsLogic();
//}
//this.checkIntersectionBetweenPlayerAndBadWords();
// this.checkIntersectionBetweenPlayerAndGoodWords();
//if (this.score <= 0) {
// screenFailedTestElement.style.display = 'initial';
// screenPlayElement.style.display = 'none';
//}

//if (this.score >= 200) {
//screenPassTestElement.style.display = 'initial';
// screenPlayElement.style.display = 'none';
// }
// }

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

//this.yPosition = this.canvas.width;

//for (let i = 0; i <= 8; i++) {
// const wordY = i * 80;
//  this.addWord(wordY);
//}

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

// These lines are good codes currently being replaced by codes below
// collectUnusedWords() {
//for (let word of this.words) {
// if (word.x <0) {
// const indexOfWord = this.words.indexOf(word);
// this.words.splice(indexOfWord, 1);
//}
//}
// }

/*collectUnusedWords() {
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
  }*/

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
