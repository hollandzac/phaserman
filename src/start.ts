import "phaser"


export default class start extends Phaser.Scene {

    constructor(){
        super('start')
    }

    preload(){
        this.load.image('logo', "assets/logo.png")
  
    }

    create(){
        this.add.image(400, 200, 'logo')
        var newGame = this.add.text(400 , 400 , "New Game", {font: "Press Start 2P"})
        this.add.text(400 , 450 , "Config", {font: "Press Start 2P"})
        this.add.text(400 , 450 , "Exit", {font: "Press Start 2P"})

        newGame.
    }
    
    down(){
        this.scene.start('map', )
    }


}
/*
Main Screen 
    - Start Game
    - High Score
    - Configa
    - Title
*/