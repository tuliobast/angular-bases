import { Character } from '../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';


@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class  MainPageComponent{
  
  constructor( private dbzService: DbzService) {}

  get character(): Character[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  } 
}