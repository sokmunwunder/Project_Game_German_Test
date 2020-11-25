class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext ('2d');
        this.reset();
        this.setKeyBindings();
    }

    reset(){
        this.player = new Player(this, 60, this.canvas.height/2-50/2, 50, 50);
        this.lastUrlaubTimestamp = 0;
        this.intervalBetweenUrlaub = 3000;
        this.urlaubStartingSpeed = 1;
        this.urlaub = [];
        this.score =[];
        this.active =true;
    }

    setKeyBindings(){
        window.addEventListener('keydown', (event) =>{
            switch (event.code){
                case 'ArrowUp':
                    this.player.y -=10;
                    break;
                case 'ArrowDown';
                    this.player.y +=10;
                    break;
            }
        
            this.player.y = Math.max(
                Math.mini(this.player.y, this.canvas.height -this.player.height), 
                0
            );
        });
    }
    addUrlaub(){
        const currentTimeStamp = Date.now();
        if (
            currentTimeStamp >
            this.lastUrlaubTimestamp + this.intervalBetweenUrlaub
        ){
            const urlaub = new Holiday (
                this,
                this.canvas.width,
                Math.randon()*(this.canvas.height -50),
                50,
                50,
                this.urlaubStartingSpeed
            );

        }
    }


}