import {Component, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
    selector: "examples",
    templateUrl: "pages/ejemplos/lista/ejemplosLista.component.html",
    styleUrls: ["pages/ejemplos/lista/ejemplosLista.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})



export class ExamplesListComponent
{
    public myExamples: string[] = [];
   
    constructor()
    {
        for(var i = 0; i<50;i++)
        {
            this.myExamples.push(i.toString())
        }
    }
}