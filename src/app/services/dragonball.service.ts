import { effect, Injectable, signal } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

const loadFromLocalStorage = () => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {
    characters = signal<ICharacter[]>(loadFromLocalStorage());

    storeInLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    })

    addCharacter (newCharacter: ICharacter) {
        this.characters.update(list => [...list, newCharacter]);
    }
}