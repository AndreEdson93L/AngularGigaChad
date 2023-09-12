import { NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { ComponentWithObservableComponent } from './components/component-with-observable/component-with-observable.component';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@NgModule({
  //Componenti del modulo (visibili d+a app-component)
  declarations: [
    AppComponent,
    ComponentWithObservableComponent,
    MyNotesComponent,
    NavbarComponent,
    HomeComponent,
    DataBindingComponent
  ],
  //Import dei moduli
  //Se vogliamo rendere visibile un componente presente in un altro modulo
  //Possiamo importare qui il modulo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Add to being able to do http calls
    HttpClientModule
  ],
  providers: [
    //Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

// Module_A {
  Components:
  - Component_A1
  - Component_A2
  - Component_A3
  
  Imports:
  // No other modules imported

  Exports:
  // If you want these components to be available outside of Module_A, they should be exported.
}

// Module_B {
  Components:
  - Component_B1
  - Component_B2
  - Component_B3

  Imports:
  // No other modules imported

  Exports:
  // If you want these components to be available outside of Module_B, they should be exported.
}

// AppModule (Main Module) {
  Components:
  - AppComponent (usually the root component)
  
  Imports:
  - Module_A (importing the entire Module_A)
  - Module_B (importing the entire Module_B)
}

*/