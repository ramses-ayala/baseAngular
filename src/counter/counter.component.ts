import { Component, computed, signal } from "@angular/core";

@Component({
    selector: 'CounterComponent',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    counter = 0;
    counterSignal = signal(0);
    myFirstNumber = signal(10);
    mySecondNumber = signal(10);
    result = computed(() => this.myFirstNumber() * this.mySecondNumber());


    increase () {
        this.counter += 1;
        this.counterSignal.update(prevValue => prevValue += 1);
    }

    decrease () {
        if (this.counter !== 0) {
            this.counterSignal.update(prevValue => prevValue -= 1);
            this.counter -= 1
        }
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}