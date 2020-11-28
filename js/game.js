class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.reset();
        this.setKeyBindings();
    }

    reset(){
        this.Player = new Player(this, this.canvas.width/2+50/2, this.canvas.height/2+50/2, 50,50);
        this.score = 0;
        this.words = [];
        this.wordStartingSpeed = 1;
        //this.intervalBetweenWords = 3000;
        //this.lastWordTimestamp = 0;
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

        this.player.y = Math.max(this.y, 100) && Math.min(this.y, this.canvas.height-50);
        });
    }

    addWords(){
      
        for (let i=0; i <=10; i++)
        {this.y = (i*50)};
        const word = new Words(
            this,
            this.canvas.width,
            this.y,
            this.wordStartingSpeed,
        );
        this.words.push(word);
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
   

   loop(){
       this.runLogic();
       this.draw();
   }
    runLogic(){
    console.log("test");
    this.addWords();
    for (let word of this.words){
        word.runLogic();
    }

    draw(){
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
    for (let word of this.words){
        word.drawWordsLogic();
    }
    this.player.draw();

    }

    //draw(){
    //console.log('draw');
    //}

    }
    
    

  