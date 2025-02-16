// *************** Angular Imports ***************
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// *************** Angular Material Imports ***************
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

// *************** Application Modules & Component Imports ***************
import { AppComponent } from './app.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { ChipsComponent } from './chips/chips.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    GridListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatChipsModule,
    MatGridListModule,
    MatCardModule,
    PokemonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
