"use strict";
var core_1 = require("@angular/core");
var MainMenu = (function () {
    function MainMenu() {
        this.hideElement = false;
    }
    MainMenu.prototype.onTap = function () {
        alert("Hidden: " + this.hideElement);
        if (this.hideElement)
            this.hideElement = false;
        else
            this.hideElement = true;
    };
    return MainMenu;
}());
MainMenu = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "html/main_menu.html",
        styleUrls: ['css/main_menu.css']
    })
], MainMenu);
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5fbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQVF4QyxJQUFhLFFBQVE7SUFOckI7UUFRSSxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQVF4QixDQUFDO0lBUFUsd0JBQUssR0FBWjtRQUNJLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSTtZQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxRQUFRO0lBTnBCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ25DLENBQUM7R0FFVyxRQUFRLENBVXBCO0FBVlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLW1lbnUnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiaHRtbC9tYWluX21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2Nzcy9tYWluX21lbnUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudXtcclxuICAgXHJcbiAgICBoaWRlRWxlbWVudCA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uVGFwKCkge1xyXG4gICAgICAgIGFsZXJ0KFwiSGlkZGVuOiBcIiArIHRoaXMuaGlkZUVsZW1lbnQpO1xyXG4gICAgICAgIGlmKHRoaXMuaGlkZUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUVsZW1lbnQgPSBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUVsZW1lbnQgPSB0cnVlO1xyXG4gICAgfVxyXG59Il19