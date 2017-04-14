import * as fs from "file-system";
import {Component} from "@angular/core";

@Component({
    selector: "exercises",
    templateUrl: "pages/ejercicios/ejercicios.html",
    styleUrls: ["pages/ejercicios/ejercicios.css"]
})

export class ExercisesComponent
{
    pdfSrc = "";
    public constructor () {
    let currentAppFolder = fs.knownFolders.currentApp();
    console.log("este folder: " + currentAppFolder.path);
    this.pdfSrc = currentAppFolder.path + "/appFiles/ejemplosOptimizacion.pdf";
    // this.pdfSrc = "https://www.princexml.com/samples/invoice/invoicesample.pdf";
  }
}