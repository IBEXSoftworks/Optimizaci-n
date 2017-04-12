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
    MainMenuComponent.prototype.viewExercises = function () {
        if (this.isExercises) {
            this.isExercises = false;
            this.isMenu = true;
            this.actualLabel = "Optimización";
        }
        else {
            this.isExercises = true;
            this.isMenu = false;
            this.actualLabel = "Ejercicios";
        }
    };
    MainMenuComponent.prototype.viewTheory = function () {
        if (this.isTheory) {
            this.isTheory = false;
            this.isMenu = true;
            this.actualLabel = "Optimización";
        }
        else {
            this.isTheory = true;
            this.isMenu = false;
            this.actualLabel = "Teoría";
        }
    };
    MainMenuComponent.prototype.viewExamples = function () {
        if (this.isExamples) {
            this.isExamples = false;
            this.isMenu = true;
            this.actualLabel = "Optimización";
        }
        else {
            this.isExamples = true;
            this.isMenu = false;
            this.actualLabel = "Ejemplos";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLGlCQUFpQjtJQU45QjtRQVFJLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZ0JBQVcsR0FBVSxjQUFjLENBQUE7SUEwQ3ZDLENBQUM7SUF4Q1UseUNBQWEsR0FBcEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLHNDQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNqQixDQUFDO1lBQ0csSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFDTSx3Q0FBWSxHQUFuQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDbkIsQ0FBQztZQUNHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDO0dBRVcsaUJBQWlCLENBZ0Q3QjtBQWhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLW1lbnUnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWFpbl9tZW51L21haW5fbWVudS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbWFpbl9tZW51L21haW5fbWVudS5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5NZW51Q29tcG9uZW50e1xyXG4gICBcclxuICAgIGlzVGhlb3J5ID0gZmFsc2U7XHJcbiAgICBpc0V4YW1wbGVzID0gZmFsc2U7XHJcbiAgICBpc0V4ZXJjaXNlcyA9IGZhbHNlO1xyXG4gICAgaXNNZW51ID0gdHJ1ZTtcclxuICAgIGFjdHVhbExhYmVsOnN0cmluZyA9IFwiT3B0aW1pemFjacOzblwiXHJcblxyXG4gICAgcHVibGljIHZpZXdFeGVyY2lzZXMoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0V4ZXJjaXNlcyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFeGVyY2lzZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc01lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbExhYmVsID0gXCJPcHRpbWl6YWNpw7NuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFeGVyY2lzZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbExhYmVsID0gXCJFamVyY2ljaW9zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHZpZXdUaGVvcnkoKXtcclxuICAgICAgICBpZih0aGlzLmlzVGhlb3J5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RoZW9yeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsTGFiZWwgPSBcIk9wdGltaXphY2nDs25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RoZW9yeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNZW51ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsTGFiZWwgPSBcIlRlb3LDrWFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlld0V4YW1wbGVzKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc0V4YW1wbGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc0V4YW1wbGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxMYWJlbCA9IFwiT3B0aW1pemFjacOzblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlzRXhhbXBsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVudSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbExhYmVsID0gXCJFamVtcGxvc1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==