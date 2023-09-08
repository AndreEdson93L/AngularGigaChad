import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyFirstServiceService } from 'src/app/services/my-first-service.service';

@Component({
  selector: 'app-component-with-observable',
  templateUrl: './component-with-observable.component.html',
  styleUrls: ['./component-with-observable.component.scss']
})
export class ComponentWithObservableComponent {

  //1.Property declarations
  public pokemons: any;

  //2.Constructor 
  constructor(
    private myFirstService : MyFirstServiceService)
    {

    }

  //3.Lifecycle hooks (component initialization logic.. ngOnInit() etc..)
  ngOnInit(): void {
    this.myFirstService.fetchData().subscribe(data => {
      this.pokemons = data.results
    })
  }
  
  //4.Other component methods

  dragonList: Observable<any[]> = new Observable<string[]>();

}
