const congratsSound = new Audio('sounds/congrats.wav');

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.reset();
    this.setKeyBindings();
  }

  reset() {
    this.player = new Player(this, 60, this.canvas.height - 75, 60, 75);
    this.lastWordTimeStamp = 0;
    this.intervalBetweenWords = 6500;
    this.wordStartingSpeed = 30;
    this.words = [];
    this.score = 190;
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
    }
    if (this.score >= 200) {
      screenPassTestElement.style.display = 'initial';
      screenPlayElement.style.display = 'none';
      setTimeout(() => congratsSound.play(), 3000);
      //congratsSound.play();
      //congratsSound.pause();
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawScore();
    for (let word of this.words) {
      word.drawWordsLogic();
    }
    this.player.draw();
  }
}
