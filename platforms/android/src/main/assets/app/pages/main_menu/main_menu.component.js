"use strict";
var core_1 = require("@angular/core");
var MainMenuComponent = (function () {
    function MainMenuComponent() {
        this.isTheory = false;
        this.isExamples = false;
        this.isExercises = false;
        this.isMenu = true;
        this.actualLabel = "Optimización";
        this.menuItems = ["Teoría", "Ejercicios", "Ejemplos"];
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
            case "Ejercicios":
                this.isExercises = true;
                this.actualLabel = act;
                break;
            case "Ejemplos":
                this.isExamples = true;
                this.actualLabel = act;
                break;
            case "Teoría":
                this.isTheory = true;
                this.actualLabel = act;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLGlCQUFpQjtJQU45QjtRQVFJLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZ0JBQVcsR0FBVSxjQUFjLENBQUM7UUFDcEMsY0FBUyxHQUFZLENBQUMsUUFBUSxFQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQTJCNUQsQ0FBQztJQXpCVyxvQ0FBUSxHQUFoQixVQUFpQixHQUFXO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO2dCQUNsQyxLQUFLLENBQUM7WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDL0MsQ0FBQztHQUVXLGlCQUFpQixDQWtDN0I7QUFsQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW5fbWVudS9tYWluX21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21haW5fbWVudS9tYWluX21lbnUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUNvbXBvbmVudHtcclxuICAgXHJcbiAgICBpc1RoZW9yeSA9IGZhbHNlO1xyXG4gICAgaXNFeGFtcGxlcyA9IGZhbHNlO1xyXG4gICAgaXNFeGVyY2lzZXMgPSBmYWxzZTtcclxuICAgIGlzTWVudSA9IHRydWU7XHJcbiAgICBhY3R1YWxMYWJlbDpzdHJpbmcgPSBcIk9wdGltaXphY2nDs25cIjtcclxuICAgIG1lbnVJdGVtczpzdHJpbmdbXSA9IFtcIlRlb3LDrWFcIixcIkVqZXJjaWNpb3NcIiwgXCJFamVtcGxvc1wiXVxyXG5cclxuICAgIHByaXZhdGUgc3dpdGNoVG8oYWN0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlzTWVudSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFeGVyY2lzZXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRXhhbXBsZXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVGhlb3J5ID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChhY3QpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk1lbnVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTGFiZWwgPSBcIk9wdGltaXphY2nDs25cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRWplcmNpY2lvc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4ZXJjaXNlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbExhYmVsID0gYWN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJFamVtcGxvc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4YW1wbGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsTGFiZWwgPSBhY3Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlRlb3LDrWFcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaGVvcnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxMYWJlbCA9IGFjdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==