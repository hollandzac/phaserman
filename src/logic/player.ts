
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