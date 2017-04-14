"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var main_menu_component_1 = require("./pages/main_menu/main_menu.component");
var teoria_component_1 = require("./pages/teoria/teoria.component");
var ejemplos_component_1 = require("./pages/ejemplos/ejemplos.component");
var ejercicios_component_1 = require("./pages/ejercicios/ejercicios.component");
var routes = [
    { path: "", redirectTo: "/main_menu", pathMatch: "full" },
    { path: "main_menu", component: main_menu_component_1.MainMenuComponent },
    { path: "ejemplos", component: ejemplos_component_1.ExamplesComponent },
    { path: "ejercicios", component: ejercicios_component_1.ExercisesComponent },
    { path: "teoria", component: teoria_component_1.TheoryComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw2RUFBMEU7QUFDMUUsb0VBQWtFO0FBQ2xFLDBFQUF3RTtBQUN4RSxnRkFBNkU7QUFFN0UsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN6RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7Q0FDakQsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21haW5fbWVudS9tYWluX21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaGVvcnlDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy90ZW9yaWEvdGVvcmlhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhhbXBsZXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9lamVtcGxvcy9lamVtcGxvcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV4ZXJjaXNlc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2VqZXJjaWNpb3MvZWplcmNpY2lvcy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9tYWluX21lbnVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJtYWluX21lbnVcIiwgY29tcG9uZW50OiBNYWluTWVudUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJlamVtcGxvc1wiLCBjb21wb25lbnQ6IEV4YW1wbGVzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImVqZXJjaWNpb3NcIiwgY29tcG9uZW50OiBFeGVyY2lzZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwidGVvcmlhXCIsIGNvbXBvbmVudDogVGhlb3J5Q29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19