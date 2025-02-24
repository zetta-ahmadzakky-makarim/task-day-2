// *************** Angular Imports ***************
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

// *************** Third-Party Library Imports ***************
import { SubSink } from 'subsink';

// *************** Application Services Imports ***************
import { PokemonsService } from './pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit, AfterViewInit, OnDestroy {
  // *************** Private Variables ***************
  private subs: SubSink = new SubSink();

  // *************** Misc Variables ***************
  title: string = 'task-day-2';
  filteredCards: { image: string; title: string; category: string }[];

  constructor(public pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.categories.push('Electric');
  }

  ngAfterViewInit(): void {
    const newCard = {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png',
      title: 'Pikachu',
      category: 'Electric',
    };

    this.pokemonsService.updateCardsSubject(newCard);
    this.subscribeUpdatedPokemonCardsSubject();
  }

  private subscribeUpdatedPokemonCardsSubject(): void {
    this.subs.sink = this.pokemonsService.filteredCards$.subscribe((value) => {
      this.filteredCards = value;
    });
  }

  // *************** Public Methods ***************
  onCategorySelected(category: string): void {
    this.pokemonsService.onCategorySelected(category);
  }

  searchPokemon(pokemonName: string): void {
    this.pokemonsService.searchPokemon(pokemonName);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
