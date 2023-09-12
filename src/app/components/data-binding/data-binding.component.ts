import { Component } from '@angular/core'

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  // 1 . Interpolation
  data_binding_value = "Hello! Change my value in the Component's Logic class"

  // 2 . Data binding
  imagePath: string = 'https://gelistir.net/wp-content/uploads/2019/10/1_C1kgFbqTyVuckvJ3Z1lgeQ-e1570370030286-1024x541.png'

  // 3 . Event binding
  handleClick(){
    alert('You pressed the button')
  }

  // 4 . Two Way Data binding
  username: string = ''
}
