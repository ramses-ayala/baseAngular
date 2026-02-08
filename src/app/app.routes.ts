import { Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { ShoppingCart } from '../shoppingCart/shoppingCart.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallComponent } from './pages/dragonball/dragonball.component';
import { DragonBallSuperPageComponent } from './pages/dragonballsuper/dragonball-super-page.component';


export const routes: Routes = [
    { path: '', component: CounterComponent },
    { path: 'shoppingCart', component: ShoppingCart },
    { path: 'hero', component: HeroPageComponent },
    { path: 'dragonball', component: DragonBallComponent },
    { path: 'dragonball-super', component: DragonBallSuperPageComponent },
    { path: '**', redirectTo: '' }
];
