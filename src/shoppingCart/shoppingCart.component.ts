import { Component, computed, signal } from "@angular/core";

interface ICart {
    id: number
    article: string
    price: number
    quantity: number
}

@Component({
    standalone: true,
    templateUrl: './shoppingCart.component.html'
})

export class ShoppingCart {
    products = signal<ICart[]>([
        {
            id: 1,
            article: 'PC',
            price: 100.50,
            quantity: 0
        },
        {
            id: 2,
            article: 'Desktop',
            price: 500.75,
            quantity: 0
        },
        {
            id: 3,
            article: 'PC',
            price: 100.50,
            quantity: 0
        },
    ]);

    calculateSubtotal () {
        return this.products().reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
    }

    tax = computed(() => {
        return Math.round(this.calculateSubtotal() * 0.16);
    })

    total = computed(() => {
        return this.tax() + this.calculateSubtotal();
    })

    totalItems () {
        return this.products().reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
    }

    increaseQuantity (id: number) {
        this.products.update(products => products.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p ));
    }

    decreaseQuantity (id: number) {
        this.products.update(products => products.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p ));
    }

    removeProduct (id: number) {
        this.products.update(products => products.filter(p => p.id !== id));
    }
}