// app.component.ts
// import {Component} from 'angular2/core';
// import {EventBindingComponent} from "./data-binding/event-binding.component";
//
// @Component({
//   selector: 'my-app',
//   template: `
//         <section class="parent">
//           <h2>This is the parent component</h2>
//           <h4>Please enter your name</h4>
//           <input type="text" [(ngModel)] ="name">
//           <br/><br/>
//           <p>{{name}}</p>
//           <section class="child">
//             <event-binding [myName]="name" [myAge]="26" [mySurname]="'dogan'" (hobbiesChanged)="hobbies=$event"></event-binding>
//           </section>
//           <p>My hobbies are: {{hobbies}}</p>
//         </section>
//     `,
//   directives : [EventBindingComponent]
// })
// export class AppComponent {
//   name = '';
//   hobbies = '';
// }

import {Component, Input, EventEmitter} from 'angular2/core';

@Component({
  selector: 'event-binding',
  template: `
    <h2>This is the child component</h2>
    <p>Hey! {{myName}} an I am {{myAge}} years old. My last name {{lastname}}</p>
    <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies/>
  `,
  inputs: ['myName', 'myAge', 'lastname:mySurname'],
  outputs: ['hobbiesChanged']
})

export class EventBindingComponent {
  myName = '';
  myAge = '';
  lastname = '';
  hobbiesChanged = new EventEmitter<string>();

  onHobbiesChanged(hobbies: string) {
    this.hobbiesChanged.emit(hobbies);
  }
}
