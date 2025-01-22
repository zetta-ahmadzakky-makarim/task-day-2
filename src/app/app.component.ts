import { AfterViewInit, Component, OnInit } from '@angular/core';

interface Card {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'task-day-2';

  categories = ['All', 'Fire', 'Water', 'Grass'];
  cards: Card[] = [
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png', title: 'Bulbasaur', category: 'Grass' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png', title: 'Ivysaur', category: 'Grass' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0186d64c5773c8d3d03cd05dc79574b2d2798d4f.png', title: 'Venusaur', category: 'Grass' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png', title: 'Charmander', category: 'Fire' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png', title: 'Charmeleon', category: 'Fire' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2050f1fd1283f473d7d048f8631712e7e003f802.png', title: 'Charizard', category: 'Fire' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png', title: 'Squirtle', category: 'Water' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png', title: 'Wartortle', category: 'Water' },
    { image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png', title: 'Blastoise', category: 'Water' },
  ];

  filteredCards = this.cards;

  ngOnInit(): void {
    const newCategory = this.categories.push('Electric');
    console.log('New Category added');
  }

  ngAfterViewInit(): void {
    const newCard = {
      image: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png',
      title: 'Pikachu',
      category: 'Electric'
    };
  
    this.cards.push(newCard);
    this.filteredCards = [...this.cards];
    console.log('New Pokemon Added:', newCard);
  }

  onCategorySelected(category: string) {
    if (category === 'All') {
      this.filteredCards = this.cards;
    } else {
      this.filteredCards = this.cards.filter(card => card.category === category);
    }
  }

  searchPokemon(pokemonName: string) {
    this.filteredCards = this.cards.filter(card => 
      card.title.toLowerCase().includes(pokemonName.toLowerCase())
    );
  }

}
