import {Component, OnInit} from 'angular2/core';

@Component({
  selector : 'my-puzzle',
  template : `
    <section class="setup">
      Enter your name please:
      <input type="text" #name (keyup)="0"/>
    </section>
    <section 
    [ngClass] = "{
      puzzle: true,
      solved: switch1.value == switch1Number && switch2.value == switch2Number
    }"
    [ngStyle] = "{display: name.value === '' ? 'none': 'block'}"
    >
      <h2>
        The Puzzle |
        {{switch1.value == switch1Number && switch2.value == switch2Number ? 'SOLVED' : 'NOT SOLVED'}}
      </h2>
      <p>Ok, welcome <span class="name">{{name.value}}</span></p>
      <br/>
      
      Switch 1:
      <input type="text" #switch1 (keyup)="0"/><br/>
      Switch 2:
      <input type="text" #switch2 (keyup)="0"/><br/>
    </section>
    <h2 [hidden] = "switch1.value != switch1Number || switch2.value != switch2Number">Congratulations {{name.value}}, you did it!</h2>
  `
})
export class PuzzleComponent implements OnInit{
  switch1Number: number;
  switch2Number: number;

  ngOnInit():any {
    this.switch1Number = Math.round(Math.random());
    this.switch2Number = Math.round(Math.random());

    console.log(this.switch1Number, this.switch2Number);
  }
}
