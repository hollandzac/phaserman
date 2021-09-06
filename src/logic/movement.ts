import { Character } from "./Character";
import { Map } from "./map";
import  { Vector2, Direction, movementDirectionVectors } from "../utils/directionUtils"
import { SPEED, TILE_SIZE, OFFSET} from "../utils/globalConsts";
import { Ghost } from "./ghost";


export class Movement {
    private pixelsMovedUpdate: number = 0
    
    constructor(private characters: Array<Character|Ghost>, private tileMap: Map){}

    update(delta: number){
        const pixelsToMove = this.getPixelsToMove(delta)
        this.pixelsMovedUpdate += pixelsToMove;
        this.pixelsMovedUpdate %= TILE_SIZE

        this.characters.forEach(character => {
            if (!this.tileMap.isBlockingDirection(character)){
                this.updateTilePosition(character, pixelsToMove) 
                this.updateSpritePosition(character, pixelsToMove)
                   
            } else{

                console.log("LOOK OUT")
            }

        })
        
    }
   
    updateSpritePosition(character: Character, pixelsToMove: number){
        ///Generate directional unit vector for new position
       
        const directionVector = movementDirectionVectors[
            character.direction
        ].clone()
        

        ///Multiply unit vector by movement distance/speed for this update
        const movementDistance = directionVector.multiply(
            new Vector2(pixelsToMove)
        )
        ///calculate new position from diectional distance vector and current position vector
        let newPos = character.getSpritePosition().add(movementDistance)
        this.pixelsMovedUpdate += pixelsToMove
        this.pixelsMovedUpdate %= TILE_SIZE
        character.setSpritePosition(newPos)
        //this.stopMoving(character)
    }

    updateTilePosition(character: Character, pixelsToMove: number):void{
        
        if(this.willCrossTileBorderThisUpdate(pixelsToMove)){
        character.setTilePosition(
            character.getTilePosition().add(movementDirectionVectors[character.direction])
        )
        }
        console.log("New Position: " + "x: " + character.getTilePosition().x + "y: " + character.getTilePosition().y)
    }
    //number of pixels to move this update
    getPixelsToMove(delta: number): number {
        const milliSecondsSinceUpdate: number = delta/1000
        return SPEED * milliSecondsSinceUpdate
    }

    private stopMoving(character: Character): void{
        character.direction = Direction.NONE
    }

    private willCrossTileBorderThisUpdate(pixelsToMove: number):boolean{
        return(this.pixelsMovedUpdate + pixelsToMove >= TILE_SIZE)

    }


    ////TILE collision

    // nextTileBlocked(character: Character): boolean {
        
    //     if (this.hasNo)
        
    //     return      

    // }

}