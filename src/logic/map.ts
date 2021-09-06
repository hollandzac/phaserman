import "phaser"
import { Character } from "./Character"
import  { Vector2, Direction, movementDirectionVectors } from "../utils/directionUtils"

export class Map {

    constructor(private tileMap:Phaser.Tilemaps.Tilemap){

    }

    public isBlockingDirection(character: Character): boolean {
        return this.hasBlockingTile(this.tilePosInDirection(character));
      }
    
      private tilePosInDirection(character: Character): Vector2 {
        return character
          .getTilePosition()
          .add(movementDirectionVectors[character.direction]);
      }
    
      private hasBlockingTile(pos: Vector2): boolean {
        if (this.hasNoTile(pos)) return true;
        return this.tileMap.layers.some((layer) => {
          const tile = this.tileMap.getTileAt(pos.x, pos.y, false, layer.name);
          return tile && tile.properties.collides;
        });
      }
      
      private hasNoTile(pos: Vector2): boolean {
        return !this.tileMap.layers.some((layer) =>
          this.tileMap.hasTileAt(pos.x, pos.y, layer.name)
        );
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