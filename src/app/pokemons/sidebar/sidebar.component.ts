// *************** Angular Imports ***************
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // *************** Decorator Variables ***************
  @Output() searchPokemon: EventEmitter<string> = new EventEmitter();
  @Output() categorySelected: EventEmitter<string> = new EventEmitter();

  // *************** Misc Variables ***************
  categories: string[] = ['All', 'Fire', 'Water', 'Grass'];

  constructor() {}

  ngOnInit(): void {}

  onSearch(pokemonName: string): void {
    this.searchPokemon.emit(pokemonName);
  }

  onCategorySelect(category: string): void {
    this.categorySelected.emit(category);
  }
}
