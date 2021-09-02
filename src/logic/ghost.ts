const SPEED = 10; //Movement speed in pixels
const TILE_SIZE = 24//
const offset = TILE_SIZE/2

export class Player {
    private sprite: Phaser.GameObjects.Sprite
    private position: position
    public direction: Direction

    constructor(sprite: Phaser.GameObjects.Sprite, tilePos: position ){
        this.sprite = sprite
        this.sprite.setPosition(
            tilePos.x * TILE_SIZE + (offset),
            tilePos.y * TILE_SIZE + (offset)
        )
        this.sprite.setFrame(1)
    }
}