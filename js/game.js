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
        this.wordStartingSpeed = 1;
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
        })
    }

    addWords(){
     const currentTimeStamp = Date.now();
     if(
      currentTimeStamp >
      this.lastWordTimeStamp + this.intervalBetweenWords
     )
     {
         const word = new Words(
         this,
         this.canvasWidth,
         Math.random()*(this.canvas.height-100),
         this.wordStartingSpeed
         );
         this.words.push(word);
         this.lastWordTimeStamp = currentTimeStamp;
     }
    }

    addPlayer(){

    }

    runLogic(){
    console.log("test");
    }

    draw(){
    console.log('draw');
    }

    }
    
    

  