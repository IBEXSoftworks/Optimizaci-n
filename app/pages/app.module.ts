import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app/app.component";
import { MainMenuComponent } from "./main_menu/main_menu.component";
import { TheoryComponent } from "./teoria/teoria.component";
import { ExamplesComponent } from "./ejemplos/ejemplos.component";
import { ExercisesComponent } from "./ejercicios/ejercicios.component";

@NgModule({
	declarations: [AppComponent, MainMenuComponent, TheoryComponent, ExamplesComponent,
		ExercisesComponent],
	bootstrap: [AppComponent],
	imports: [NativeScriptModule],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
