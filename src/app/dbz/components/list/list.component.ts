import { Component, Input, Output, EventEmitter } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent { 
  
  @Input()
  public charactersList: Character[] = [{
    id: '',
    name: '',
    power:  0
  }];

  @Output()
  public onDeleted:EventEmitter<string> = new EventEmitter();

  // onDeletedCharacter(index: number): void {
  // this.onDeleted.emit(index);
  // }

  deleteCharacterById(id?:string){

    if (!id) return;  
    this.onDeleted.emit(id);
  }
}
