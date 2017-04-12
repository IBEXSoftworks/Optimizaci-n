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

    public viewExercises() {
        if(this.isExercises){
            this.isExercises = false;
            this.isMenu = true;
            this.actualLabel = "Optimización";
        }
        else{
            this.isExercises = true;
            this.isMenu = false;
            this.actualLabel = "Ejercicios";
        }
    }
    public viewTheory(){
        if(this.isTheory)
        {
            this.isTheory = false;
            this.isMenu = true;
            this.actualLabel = "Optimización";
        }
        else
        {
            this.isTheory = true;
            this.isMenu = false;
            this.actualLabel = "Teoría";
        }
    }
    public viewExamples(){
        if(this.isExamples)
        {
            this.isExamples = false;
            this.isMenu = true;
            this.actualLabel = "Optimización";
        }
        else
        {
            this.isExamples = true;
            this.isMenu = false;
            this.actualLabel = "Ejemplos";
        }
    }
}