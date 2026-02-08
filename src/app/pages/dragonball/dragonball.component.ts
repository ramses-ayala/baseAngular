import { Component, signal,  } from "@angular/core";

interface ICharacter {
    id: number;
    name: string;
    power: number
}

@Component({
    selector: 'dragonball-component',
    templateUrl: './dragonball.component.html'
})

export class DragonBallComponent {

    name = signal('');
    power = signal(0);

    characters = signal<ICharacter[]>([
        {
            id: 1,
            name: "Goku",
            power: 9001
        }
    ]);

    /* classesPower = computed(() => {
        return {
            'text-danger': true
        }
    }) */

    /* onChangeEvent (event: Event) {
        const value = (event.target as HTMLInputElement).value;
        console.log('value: ', value);
    } */

        /* convertToInt (event: Event) {
            const value = parseInt((event.target as HTMLInputElement).value);
            this.power.set(value);
            console.log('value: ', value, ' , typeof: ', typeof(value));
        } */

    addCharacter() {
        if (!this.name() || !this.power() || this.power() <= 0) return;

        const newCharacter: ICharacter = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }
        console.log('newCharacter: ', newCharacter);
        this.characters.update((items) => [...items, newCharacter]);
        this.resetFields();
    }

    resetFields () {
        this.name.set("");
        this.power.set(0);
    }
}