// *************** Third-Party Library Imports ***************
import { BehaviorSubject } from 'rxjs';

export class PokemonsService {
  categories: string[] = ['All', 'Fire', 'Water', 'Grass'];
  initialCardsSubject = [
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png',
      title: 'Bulbasaur',
      category: 'Grass',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png',
      title: 'Ivysaur',
      category: 'Grass',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0186d64c5773c8d3d03cd05dc79574b2d2798d4f.png',
      title: 'Venusaur',
      category: 'Grass',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png',
      title: 'Charmander',
      category: 'Fire',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png',
      title: 'Charmeleon',
      category: 'Fire',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2050f1fd1283f473d7d048f8631712e7e003f802.png',
      title: 'Charizard',
      category: 'Fire',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
      title: 'Squirtle',
      category: 'Water',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png',
      title: 'Wartortle',
      category: 'Water',
    },
    {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png',
      title: 'Blastoise',
      category: 'Water',
    },
  ];

  private filteredCardsSubject = new BehaviorSubject<{ image: string; title: string; category: string }[]>(this.initialCardsSubject);
  filteredCards$ = this.filteredCardsSubject.asObservable();

  onCategorySelected(category: string): void {
    const filteredCards =
      category === 'All' ? this.initialCardsSubject : this.initialCardsSubject.filter((card) => card.category === category);
    this.filteredCardsSubject.next(filteredCards);
  }

  updateCardsSubject(value: { image: string; title: string; category: string }): void {
    this.initialCardsSubject.push(value);
  }

  searchPokemon(pokemonName: string): void {
    const filteredCards = this.initialCardsSubject.filter((card) =>
      card.title.toLowerCase().includes(pokemonName.toLowerCase())
    );
    this.filteredCardsSubject.next(filteredCards);
  }
}
