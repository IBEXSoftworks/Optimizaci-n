import {Component} from "@angular/core";

@Component({
    selector: 'main-menu',
    templateUrl: "pages/main_menu/main_menu.html",
    styleUrls: ['pages/main_menu/main_menu.css']
})

export class MainMenuComponent{
    menuItems:string[][] = [ ["Teoría", "teoria"], ["Ejercicios Resueltos", "ejercicios"], ["Ejemplos", "ejemplos"]];
}