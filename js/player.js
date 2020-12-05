const playerImage = new Image();
playerImage.src = 'images/newJian.png';

class Player {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.game.context.drawImage(
      playerImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
