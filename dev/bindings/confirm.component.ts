// import {Component} from 'angular2/core';
// import {InputComponent} from "./bindings/input.component";
// import {ConfirmComponent} from "./bindings/confirm.component";
//
//
// @Component({
//   selector: 'my-app',
//   template: `
//       <div class="container">
//         <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
//       </div>
//       <div class="container">
//         <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
//       </div>
//     `,
//   directives : [InputComponent, ConfirmComponent]
// })
// export class AppComponent {
//   myself = {name: '', age: ''};
//   confirmedMyself = {name: '', age: ''};
//
//   onSubmit(myself: {name: string, age: string}) {
//     this.myself = {name: myself.name, age: myself.age};
//     // this.myself = myself;
//   }
//
//   onConfirm(myself: {name: string, age: string}) {
//     this.confirmedMyself = {name: myself.name, age: myself.age};
//     // this.confirmedMyself = myself;
//   }
// }

import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-confirm',
  template: `
    <h1>You submitted following details. Is this correct?</h1>
    <p>
      Your name is <span>{{myself.name}}</span> and you're <span class="highlight">{{myself.age}}</span>
      years old. Please click on 'Confirm' if you have made any changes to this information.
    </p>
    <div>
      <label for="name">Your name</label>
      <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()" />
    </div>
    <div>
      <label for="age">Your age</label>
      <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()"/>
    </div>
    <br/>
    <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
    <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
    <br/>
    <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
  `,
  inputs: ['myself'],
  outputs: ['confirmed']
})

export class ConfirmComponent {
  myself = {name: '', age: ''};
  isFilled = false;
  isValid = false;
  confirmed = new EventEmitter<{name: string, age: string}>();

  onKeyup() {
    if(this.myself.name != '' && this.myself.age != '') {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
    if(this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  onConfirm() {
    this.confirmed.emit(this.myself);
  }
}
