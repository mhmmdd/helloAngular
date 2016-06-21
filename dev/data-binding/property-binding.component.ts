// app.component.ts
// import {Component} from 'angular2/core';
// import {PropertyBindingComponent} from "./data-binding/property-binding.component";
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
//             <property-binding [myName]="name" [myAge]="26" [mySurname]="'dogan'" [myCar]="'BMW'"></property-binding>
//           </section>
//         </section>
//         <!--<my-puzzle></my-puzzle>-->
//     `,
//   directives : [PuzzleComponent, PropertyBindingComponent]
// })
// export class AppComponent {
//   name = '';
// }

import {Component, Input} from 'angular2/core';

@Component({
  selector: 'property-binding',
  template: `
    <h2>This is the child component</h2>
    <p>Hey! {{myName}} an I am {{myAge}} years old. My last name {{lastname}}</p>
    <p>My Car {{car}}</p>
  `,
  inputs: ['myName', 'myAge', 'lastname:mySurname']
})

export class PropertyBindingComponent {
  myName = '';
  myAge = '';
  lastname = '';
  @Input('myCar') car = 'Mercedes'
}
