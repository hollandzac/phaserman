import "phaser"


export default class map extends Phaser.Scene {

    constructor(){
        super('map')
    }

/*
Game Scene 
    - Tiles
    - Pac
    - Score
    - Lives
    - Ghost
    - Pellet
    - Power Pellet
Load in assets

*/
    preload(){
     
    }
//Create scene
    create(){
        this.add.text(400 , 400 , "New Game", {font: "Press Start 2P", fontSize: "100px"})
    }


}
/*
Game Scene 
    - Tiles
    - Pac
    - Score
    - Lives
    - Ghost
    - Pellet
    - Power Pellet
*/