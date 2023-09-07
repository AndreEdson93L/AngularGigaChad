import { Component } from '@angular/core';

//Decorator @Component( etc .. approccio dichiarativo )
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: `<h1>Not Cool But Possible</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
}
