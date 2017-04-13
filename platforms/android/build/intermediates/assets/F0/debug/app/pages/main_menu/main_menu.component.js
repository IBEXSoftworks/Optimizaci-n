"use strict";
var core_1 = require("@angular/core");
var MainMenuComponent = (function () {
    function MainMenuComponent() {
        this.isTheory = false;
        this.isExamples = false;
        this.isExercises = false;
        this.isMenu = true;
        this.actualLabel = "Optimización";
    }
    MainMenuComponent.prototype.switchTo = function (act) {
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
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "pages/main_menu/main_menu.html",
        styleUrls: ['pages/main_menu/main_menu.css']
    })
], MainMenuComponent);
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLGlCQUFpQjtJQU45QjtRQVFJLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZ0JBQVcsR0FBVSxjQUFjLENBQUE7SUEwQnZDLENBQUM7SUF4Qlcsb0NBQVEsR0FBaEIsVUFBaUIsR0FBVztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQy9DLENBQUM7R0FFVyxpQkFBaUIsQ0FnQzdCO0FBaENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21haW4tbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tYWluX21lbnUvbWFpbl9tZW51Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWydwYWdlcy9tYWluX21lbnUvbWFpbl9tZW51LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVDb21wb25lbnR7XHJcbiAgIFxyXG4gICAgaXNUaGVvcnkgPSBmYWxzZTtcclxuICAgIGlzRXhhbXBsZXMgPSBmYWxzZTtcclxuICAgIGlzRXhlcmNpc2VzID0gZmFsc2U7XHJcbiAgICBpc01lbnUgPSB0cnVlO1xyXG4gICAgYWN0dWFsTGFiZWw6c3RyaW5nID0gXCJPcHRpbWl6YWNpw7NuXCJcclxuXHJcbiAgICBwcml2YXRlIHN3aXRjaFRvKGFjdDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc01lbnUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRXhlcmNpc2VzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0V4YW1wbGVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1RoZW9yeSA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoYWN0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNZW51XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbExhYmVsID0gXCJPcHRpbWl6YWNpw7NuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkV4ZXJjaXNlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4ZXJjaXNlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbExhYmVsID0gXCJFamVyY2ljaW9zXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkV4YW1wbGVzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXhhbXBsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxMYWJlbCA9IFwiRWplbXBsb3NcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVGhlb3J5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGhlb3J5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTGFiZWwgPSBcIlRlb3LDrWFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==