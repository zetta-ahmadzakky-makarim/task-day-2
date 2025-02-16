// *************** Angular Imports ***************
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// *************** Angular Material Imports ***************
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

// *************** Application Modules & Component Imports ***************
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { GridListComponent } from './content/grid-list/grid-list.component';

@NgModule({
  declarations: [
    ContentComponent,
    CardComponent,
    GridListComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [
    ContentComponent,
  ],
})
export class ContentModule {}
