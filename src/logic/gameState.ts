export default class GameState {
  private life: number = 3;
  private highScore: number;

  constructor() {}

  storeHighScore() {
    let score = JSON.parse(localStorage.getItem("highscore"));
    score = parseInt(score);
  
  }

  retrieveHighScore() {
    localStorage.setItem("highscore", `$(highscore)`);
  }

  getHighScore(): number{
      return this.highScore
  }

  setHighScore(score:number):boolean{
    if (score > this.highScore) {
        this.highScore = score
        return true
      }else{
          return false
      }
  }

  death() {
    if (this.life <= 1) {
      return false;
    } else {
      this.life -= 1;
      return true;
    }
  }
}
