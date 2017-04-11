import {Component} from "@angular/core";

@Component({
    selector: 'main-menu',
    templateUrl: "html/main_menu.html",
    styleUrls: ['css/main_menu.css']
})

export class MainMenu{
   
    hideElement = false;
    public onTap() {
        alert("Hidden: " + this.hideElement);
        if(this.hideElement)
            this.hideElement = false;
        else
            this.hideElement = true;
    }
}