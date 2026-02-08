import { Component, inject, signal,  } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from "../../services/dragonball.service";

@Component({
    selector: 'dragonball-super-component',
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterListComponent, CharacterAddComponent]
})

export class DragonBallSuperPageComponent {
    // constructor (
    //    dragonBallService: DragonBallService
    // ) {}
    public dragonBallService = inject(DragonBallService);
}