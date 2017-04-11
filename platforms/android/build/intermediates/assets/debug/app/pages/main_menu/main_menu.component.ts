import {Component} from "@angular/core";

@Component({
    selector: 'main-menu',
    templateUrl: "./main_menu.html",
    styleUrls: ['./main_menu.css']
})

export class MainMenu{
   
    visible = true;
    public onTap() {
        if(this.visible)
            this.visible = false;
        else
            this.visible = true;
        alert("Hidden: " + this.visible);
    }
}