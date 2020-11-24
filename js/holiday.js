class Holiday {
    constructor(game, x, y, width, height, speed){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;

        this.positionChangeTimestamp = 0; 
        this.position = 0;
    }
}