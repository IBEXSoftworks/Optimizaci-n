import {Component} from "@angular/core";

@Component({
    selector: 'main-menu',
    templateUrl: "pages/main_menu/main_menu.html",
    styleUrls: ['pages/main_menu/main_menu.css']
})

export class MainMenuComponent{
   
    isTheory = false;
    isExamples = false;
    isExercises = false;
    isMenu = true;
    actualLabel:string = "Optimización"

    private switchTo(act: string) {
        this.isMenu = false;
        this.isExercises = false;
        this.isExamples = false;
        this.isTheory = false;
        switch (act) {
            case "Menu":
                this.isMenu = true;
                this.actualLabel = "Optimización";
                break;
            case "Exercises":
                this.isExercises = true;
                this.actualLabel = "Ejercicios";
                break;
            case "Examples":
                this.isExamples = true;
                this.actualLabel = "Ejemplos";
                break;
            case "Theory":
                this.isTheory = true;
                this.actualLabel = "Teoría";
                break;
        }
    }
}