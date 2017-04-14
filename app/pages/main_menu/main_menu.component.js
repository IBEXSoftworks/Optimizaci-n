"use strict";
var core_1 = require("@angular/core");
var MainMenuComponent = (function () {
    function MainMenuComponent() {
        this.menuItems = [
            ["Teoría", "teoria", "my-btn-red"],
            ["Ejercicios Resueltos", "ejercicios", "my-btn-blue"],
            ["Ejemplos", "ejemplos", "my-btn-green"]
        ];
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLGlCQUFpQjtJQU45QjtRQU9JLGNBQVMsR0FBYztZQUNuQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDO1lBQ2xDLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxFQUFDLGFBQWEsQ0FBQztZQUNwRCxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsY0FBYyxDQUFDO1NBQzFDLENBQUM7SUFDTixDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDO0dBRVcsaUJBQWlCLENBTTdCO0FBTlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW5fbWVudS9tYWluX21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21haW5fbWVudS9tYWluX21lbnUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUNvbXBvbmVudHtcclxuICAgIG1lbnVJdGVtczpzdHJpbmdbXVtdID0gWyBcclxuICAgICAgICBbXCJUZW9yw61hXCIsIFwidGVvcmlhXCIsIFwibXktYnRuLXJlZFwiXSwgXHJcbiAgICAgICAgW1wiRWplcmNpY2lvcyBSZXN1ZWx0b3NcIiwgXCJlamVyY2ljaW9zXCIsXCJteS1idG4tYmx1ZVwiXSwgXHJcbiAgICAgICAgW1wiRWplbXBsb3NcIiwgXCJlamVtcGxvc1wiLFwibXktYnRuLWdyZWVuXCJdXHJcbiAgICBdO1xyXG59Il19