import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { ComponentWithObservableComponent } from './components/component-with-observable/component-with-observable.component';
import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'my-notes',
    component: MyNotesComponent
  },
  {
    path: 'poke-api',
    component: ComponentWithObservableComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
