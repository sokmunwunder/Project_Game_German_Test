class Words {
  constructor(game, x, y, xSpeed) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.width = 100;
    this.height = 50;

    let arrayWords = [
      'Urlaub       ',
      'Sonne       ',
      'Flug       ',
      'Hotel       ',
      'Lernen      ',
      'Schule       ',
      'Buch       ',
      'Fehler       ',
      'Lehrer       ',
      'Strand       ',
      'Bonus       ',
      'Meer       ',
      'Wörter       ',
      'Prüfung       ',
      'Lektion       ',
      'Lesen        ',
      'Fehler       ',
      'Klasse       ',
      'Hören       ',
      'Wandern        ',
      'Spielen       ',
      'Reise        ',
      'Fehler       ',
      'Museen        ',
      'Eis       ',
      'Camping       ',
      'Fehler       ',
      'Grillen       ',
      'Berg        ',
      'Insel       ',
      'Vortrag       ',
      'Aufgabe       ',
      'Note       ',
      'Nomen        ',
      'Bonus       ',
      'Verben       '
    ];

    let randomArrayWord =
      arrayWords[Math.floor(Math.random() * arrayWords.length)];
    this.value = randomArrayWord;
  }

  runWordsLogic() {
    this.x -= 1;
  }

  drawWordsLogic() {
    this.game.context.fillStyle = 'slategrey';
    this.game.context.font = '24px, monospace';
    this.game.context.fillText(this.value, this.x, this.y);
  }
}
