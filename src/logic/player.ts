
export enum direction{
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"

}
export interface position {
    x: number
    y: number
}

const SPEED = 10; //Movement speed in pixels

export default class Player {
    public life:number
    public sprite
    public position: position
    public direction: direction

    constructor(sprite: any, position: position){
        this.direction = direction.LEFT
        this.sprite = sprite
        this.position = position

    }

    updateDirection(){
        if(nextTile)
    }

    updatePosition(){
        switch(this.direction) {
            case(direction.LEFT): this.position.x -= SPEED
            case(direction.RIGHT): this.position.x += SPEED
            case(direction.UP): this.position.y -= SPEED
            case(direction.DOWN): this.position.y += SPEED  
        }
    }
    isWall(){

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