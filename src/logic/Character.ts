import "phaser"
import  { Vector2, Direction } from "../utils/directionUtils"
import { SPEED, TILE_SIZE, OFFSET} from "../utils/globalConsts";


export class Character {
    private sprite: Phaser.GameObjects.Sprite
    private position: Vector2
    public direction: Direction = Direction.UP
    public oldTilePosition: Vector2

    constructor(sprite: Phaser.GameObjects.Sprite, position: Vector2){
        this.sprite = sprite
        this.position = position
        this.sprite.setPosition(
            this.position.x * TILE_SIZE + (OFFSET),
            this.position.y * TILE_SIZE + (OFFSET)
        )
        this.sprite.setFrame(1)
    }
    setDirection(direction: Direction){
        this.direction = direction
    }
    setSpritePosition(position: Vector2): void{
        this.sprite.setPosition(position.x, position.y)
    }
    getSpritePosition(): Vector2{
        return this.sprite.getCenter()
    }
    getTilePosition(){
        return this.position.clone()
    }
    setTilePosition(newTilePosition: Vector2){
        this.position = newTilePosition.clone()

    }
  
    //Getters and setters
}

/*
    Position
    Score
    Funcs {
        Turn
        Move
        is Wall;
        eatPellet;
        death?
    }
    move
*/