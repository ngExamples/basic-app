import { Component } from "@angular/core";
import { User } from "app/user"

@Component({
    selector: 'app-root',
    template: `
    <h1>{{title}}</h1>
    <p>Known users</p>
    <ul>
        <li *ngFor="let user of users"> {{ user.name }}</li>
    </ul>
    `
})
export class AppComponent {
    title: string = "System Users";

    users: User[] = [
        new User(1, "Jermey"),
        new User(2, "Katkot"),
        new User(3, "Muhammad"),
        new User(4, "Tamer")
    ];
}