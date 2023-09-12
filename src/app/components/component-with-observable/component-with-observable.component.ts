import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from 'src/app/models/pokemon.model';
import { MyFirstServiceService } from 'src/app/services/my-first-service.service';

@Component({
  selector: 'app-component-with-observable',
  templateUrl: './component-with-observable.component.html',
  styleUrls: ['./component-with-observable.component.scss']
})
export class ComponentWithObservableComponent {

  //1.Property declarations
  public pokemons: Pokemon[] = [];

  //2.Constructor 
  constructor(
    private myFirstService : MyFirstServiceService)
    {

    }

  //3.Lifecycle hooks (component initialization logic.. ngOnInit() etc..)
  ngOnInit(): void {
    //So, in essence, the subscribe method is where you tell the Observable: 
    //"Start your work, and when you get data, this is what I want to do with it."
    this.myFirstService.fetchData().subscribe((data: PokemonResponse) => {
      this.pokemons = data.results
    })
  }
  
  //4.Other component methods

  dragonList: Observable<any[]> = new Observable<string[]>();

}
