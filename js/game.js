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
    }
    

    runLogic(){
     console.log("test");
    };
    drawImage(){
    console.log('draw');
    //setTimeout(() =>{
        //console.log('every 1 sec');
   // },1000);
    };
}