// *************** Angular Imports ***************
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnChanges {
  // *************** Decorator Variables ***************
  @Input() cards: object[] = [];
  @Input() selectedCategory: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
