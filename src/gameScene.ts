import "phaser"
import { Movement } from "./logic/movement"
import { Character } from "./logic/Character"
import { Controls } from "./logic/controls"
import { Map } from "./logic/map"
import { Ghost } from "./logic/ghost"
export default class gameScene extends Phaser.Scene {

    private ghosts: Array<Ghost> = []
    private pacman: Character
    private gridMap: Map
    private movement: Movement
    private controls: Controls

    constructor(){
        super('gameScene')
    }

    preload(){
        this.load.image("tiles", "assets/tileset.png")
        this.load.tilemapTiledJSON({key: "map1", url: "assets/tileMap.json"})
        this.load.spritesheet('pacman', "assets/pacman3.png", {frameWidth:24})
        this.load.spritesheet('ghosts', "assets/ghosts.png", {frameWidth:22} )
  
    }

    create(){
        this.add.image(0,0,"tiles")
        const map = this.make.tilemap({key: "map1"})
        let tileset = map.addTilesetImage("blocks", "tiles")

        for (let i=0; i < map.layers.length; i++){
            map.createLayer(i,tileset, 0, 0).setDepth(i)
        }
        

        let characterSprite = this.add.sprite(0,0,'pacman')
        characterSprite.setDepth(2)
        this.pacman = new Character(characterSprite,new Phaser.Math.Vector2(1,1))
        this.createGhosts()
        this.controls = new Controls(this.input, this.pacman )
        this.gridMap = new Map(map)
        let characterArray = [this.pacman].concat(this.ghosts)
        this.movement = new Movement(characterArray, this.gridMap)

    }
    update(_time: number, delta: number){
        this.controls.updateKeyPress()
        this.movement.update(delta)
    }
    createGhosts(){
        for(let i=0;i<3;i++){
            var characterSprite = this.add.sprite(i+9,10,'ghosts',i*4)
            characterSprite.setDepth(2)
       
        }
        let ghost = new Character(characterSprite,new Phaser.Math.Vector2(9,10))
        this.ghosts.push(ghost)

    }


}
/*
Main Screen 
    - Start Game
    - High Score
    - Configa
    - Title
*/