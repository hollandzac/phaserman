export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NONE = "NONE",
}

export const Vector2 = Phaser.Math.Vector2;
export type Vector2 = Phaser.Math.Vector2;

//Map directional enum to vector for vector math
export const movementDirectionVectors: {
  [key in Direction]?: Vector2;
} = {
  [Direction.UP]: Vector2.UP,
  [Direction.DOWN]: Vector2.DOWN,
  [Direction.LEFT]: Vector2.LEFT,
  [Direction.RIGHT]: Vector2.RIGHT,
  [Direction.NONE]: Vector2.ZERO,
};
