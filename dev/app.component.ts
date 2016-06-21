import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./data-binding/property-binding.component";

@Component({
  selector: 'my-app',
  template: `
        <section class="parent">
          <h2>This is the parent component</h2>
          <h4>Please enter your name</h4>
          <input type="text" [(ngModel)] ="name">
          <br/><br/>
          <p>{{name}}</p>
          <section class="child">
            <property-binding [myName]="name" [myAge]="26" [mySurname]="'dogan'" [myCar]="'BMW'"></property-binding>
          </section>
        </section>
    `,
  directives : [PropertyBindingComponent]
})
export class AppComponent {
  name = '';
}
