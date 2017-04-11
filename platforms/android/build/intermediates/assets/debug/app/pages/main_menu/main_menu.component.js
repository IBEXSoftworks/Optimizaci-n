"use strict";
var core_1 = require("@angular/core");
var MainMenu = (function () {
    function MainMenu() {
        this.visible = true;
    }
    MainMenu.prototype.onTap = function () {
        if (this.visible)
            this.visible = false;
        else
            this.visible = true;
        alert("Hidden: " + this.visible);
    };
    return MainMenu;
}());
MainMenu = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "./main_menu.html",
        styleUrls: ['./main_menu.css']
    })
], MainMenu);
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLFFBQVE7SUFOckI7UUFRSSxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBUW5CLENBQUM7SUFQVSx3QkFBSyxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUk7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksUUFBUTtJQU5wQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGtCQUFrQjtRQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUNqQyxDQUFDO0dBRVcsUUFBUSxDQVVwQjtBQVZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbl9tZW51Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL21haW5fbWVudS5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5NZW51e1xyXG4gICBcclxuICAgIHZpc2libGUgPSB0cnVlO1xyXG4gICAgcHVibGljIG9uVGFwKCkge1xyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSlcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGFsZXJ0KFwiSGlkZGVuOiBcIiArIHRoaXMudmlzaWJsZSk7XHJcbiAgICB9XHJcbn0iXX0=