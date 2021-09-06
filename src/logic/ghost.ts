import "phaser"
import { Character } from "./Character";
import  { Vector2, Direction } from "../utils/directionUtils"
import { SPEED, TILE_SIZE, OFFSET} from "../utils/globalConsts";


export class Ghost extends Character {
    constructor(sprite: Phaser.GameObjects.Sprite, position: Vector2){
        super(sprite,position)
    }

}