import { Component, input } from '@angular/core';
import { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html'
})

export class CharacterListComponent {
  characters = input.required<ICharacter[]>();
  listName = input.required<string>();
}
