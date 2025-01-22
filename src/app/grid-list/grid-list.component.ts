import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridListComponent{
  @Input() cards: object[] = [];
  @Input() selectedCategory: string = 'All';
}
