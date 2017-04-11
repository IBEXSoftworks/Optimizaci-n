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
        alert("Visible: " + this.visible);
    };
    return MainMenu;
}());
MainMenu = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "pages/main_menu/main_menu.html",
        styleUrls: ['pages/main_menu/main_menu.css']
    })
], MainMenu);
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLFFBQVE7SUFOckI7UUFRSSxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBUW5CLENBQUM7SUFQVSx3QkFBSyxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUk7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksUUFBUTtJQU5wQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDO0dBRVcsUUFBUSxDQVVwQjtBQVZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW5fbWVudS9tYWluX21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21haW5fbWVudS9tYWluX21lbnUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudXtcclxuICAgXHJcbiAgICB2aXNpYmxlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBvblRhcCgpIHtcclxuICAgICAgICBpZih0aGlzLnZpc2libGUpXHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBhbGVydChcIlZpc2libGU6IFwiICsgdGhpcy52aXNpYmxlKTtcclxuICAgIH1cclxufSJdfQ==