import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: string[] = [];
  xIsNext: boolean = true;
  winner: string = '';

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
    console.log('new Game');
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeTurn(idx: number) {
    // console.log(`squares: -> ${this.squares[idx]}`);
    // console.log(`!squares: -> ${!this.squares[idx]}`);
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.findWinner();
  }

  findWinner(){
    console.log(this.squares);

    const sign: string = "Z";

    const WINNING_LINES = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      
      [2, 4, 6],
      [0, 4, 8]
    ];
    
    let winner: string = "";

    for (let i = 0; i < WINNING_LINES.length; i++) {
      const [sign1, sign2, sign3] = WINNING_LINES[i];
      if (
        this.squares[sign1] === "X" &&
        this.squares[sign1] === this.squares[sign2] &&
        this.squares[sign2] === this.squares[sign3]
      ) {
        winner = "X";
      } else if (
        this.squares[sign1] === "O" &&
        this.squares[sign1] === this.squares[sign2] &&
        this.squares[sign2] === this.squares[sign3]
      ) {
        winner = "O";
      }
    }   
    return winner;
  }
}