import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'WindStrom'
  };
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroServices: HeroService) { }
  getHeroes(): void {
    this.heroServices.getHeroes() .subscribe( heroes =>  this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

}
