import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    imports: [RouterLink, RouterLinkActive]
})

export class NavbarComponent {}