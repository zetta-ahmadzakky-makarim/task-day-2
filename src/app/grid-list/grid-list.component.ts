import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridListComponent implements OnChanges{
  cols: number = 3;
  @Input() cards: object[] = [];
  @Input() selectedCategory: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.cols = result.matches ? 1 : 3;
    });
  }
}
