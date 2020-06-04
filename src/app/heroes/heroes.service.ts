import {Injectable, OnInit} from '@angular/core';
import {Hero} from '../interface_folder/hero';
import {Heroes} from './heroes-dbmock';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HeroesService
{
  heroes: Hero[];
  constructor()
  {
    this.heroes = Heroes;
  }

  public getHeroes()
  {
    return this.heroes;
  }
}


