import { Injectable } from '@angular/core';

@Injectable()
export class BestScore {

  private snakeGame = 'snake_game';

  public store(score: number) {
    localStorage.setItem(this.snakeGame, JSON.stringify({ 'best_score': score }));
  }

  public retrieve() {
    let storage = this.parsescore();
    if (!storage) {
      this.store(0);
      storage = this.parsescore();
    }

    return storage.best_score;
  }

  private parsescore() {
    return JSON.parse(localStorage.getItem(this.snakeGame));
  }
}
