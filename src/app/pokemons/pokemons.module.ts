// *************** Angular Imports ***************
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// *************** Application Modules & Component Imports ***************
import { PokemonsComponent } from './pokemons.component';
import { ContentModule } from './content/content.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    PokemonsComponent,
  ],
  imports: [
    CommonModule,
    ContentModule,
    SidebarModule,
  ],
  exports: [
    PokemonsComponent,
  ],
})
export class PokemonsModule {}
