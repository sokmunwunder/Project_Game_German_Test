class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.reset();
        this.setKeyBindings();
    }

    reset(){
        this.Player = new Player(this, this.canvas.width/2, this.canvas.height/2, 50,50);
        this.score = 0;
        this.words = [];
        this.wordsStartingSpeed = 1;
        this.intervalBetweenWords = 3000;
        this.lastWordTimestamp = 0;
        //this.active = true;

    }

    setKeyBindings(){
        window.addEventListener('keydown', (event) => {
            switch(event.code){
                case 'ArrowUp':
                    this.player.y -=10;
                    break;
                case 'ArrowDown':
                    this.player.y +=10;
                    break;
                case 'ArrowRight':
                    this.player.x +=10;
                    break;
                case 'ArrowLeft':
                    this.player.x -=10;
                    break;
            }
        }
    
    

    runLogic(){
     console.log("test");
    }

    drawImage(){
    console.log('draw');
  
    }
}



  //setTimeout(() =>{
        //console.log('every 1 sec');
   // },1000);