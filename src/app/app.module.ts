import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapDirective } from './map.component';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SenatorComponent } from './senator/senator.component';


const appRoutes: Routes = [
  { path: 'state/:id', component: StateComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent},
  { path: 'senator/:id', component: SenatorComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MapDirective,
    StateComponent,
    HomeComponent,
    SenatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    // MatCardModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
