import {Component} from "@angular/core";

@Component({
    selector: 'main-menu',
    templateUrl: "pages/main_menu/main_menu.html",
    styleUrls: ['pages/main_menu/main_menu.css']
})

export class MainMenu{
   
    visible = true;
    public onTap() {
        if(this.visible)
            this.visible = false;
        else
            this.visible = true;
        alert("Visible: " + this.visible);
    }
}