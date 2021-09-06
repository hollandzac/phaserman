
import { Character } from "./Character"
import { Direction } from "../utils/directionUtils"

export class Controls {
    private input: Phaser.Input.InputPlugin
    private pacman: Character

    
    constructor(input: Phaser.Input.InputPlugin, pacman: Character ){
        this.input = input
        this.pacman = pacman

    }

    updateKeyPress() {
        const cursor = this.input.keyboard.createCursorKeys()

        if(cursor.left.isDown) {
            this.pacman.setDirection(Direction.LEFT)
        }else if (cursor.right.isDown){
            this.pacman.setDirection(Direction.RIGHT)

        }else if (cursor.up.isDown){
            this.pacman.setDirection(Direction.UP)
            
        }else if (cursor.down.isDown){
            this.pacman.setDirection(Direction.DOWN)
        }else if (cursor.space.isDown){
            this.pacman.setDirection(Direction.NONE)
        } 
    }
}