import { Component, signal } from "@angular/core";

@Component ({
    standalone: true,
    templateUrl: './fetchData.component.html'
})

export class FetchData {
  /*   userId = signal(1);
    post = signal(null);

    effect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId()}`)
        .then(response => response.json())
        .then(data => post.set(data));
    }); */
}