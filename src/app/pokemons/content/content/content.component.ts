// *************** Angular Imports ***************
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  // *************** Decorator Variables ***************
  @Input() filteredCards: any[];

  constructor() {}

  ngOnInit(): void {}
}
