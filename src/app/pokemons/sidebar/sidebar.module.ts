// *************** Angular Imports ***************
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// *************** Angular Material Imports ***************
import { MatChipsModule } from '@angular/material/chips';

// *************** Application Modules & Component Imports ***************
import { SidebarComponent } from './sidebar.component';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ChipsComponent,
  ],
  imports: [
    CommonModule,
    MatChipsModule,
  ],
  exports: [
    SidebarComponent,
  ],
})
export class SidebarModule {}
