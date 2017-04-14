"use strict";
var fs = require("file-system");
var core_1 = require("@angular/core");
var ExercisesComponent = (function () {
    function ExercisesComponent() {
        this.pdfSrc = "";
        var currentAppFolder = fs.knownFolders.currentApp();
        console.log("este folder: " + currentAppFolder.path);
        this.pdfSrc = currentAppFolder.path + "/appFiles/ejemplosOptimizacion.pdf";
        // this.pdfSrc = "https://www.princexml.com/samples/invoice/invoicesample.pdf";
    }
    return ExercisesComponent;
}());
ExercisesComponent = __decorate([
    core_1.Component({
        selector: "exercises",
        templateUrl: "pages/ejercicios/ejercicios.html",
        styleUrls: ["pages/ejercicios/ejercicios.css"]
    }),
    __metadata("design:paramtypes", [])
], ExercisesComponent);
exports.ExercisesComponent = ExercisesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWplcmNpY2lvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlamVyY2ljaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWtDO0FBQ2xDLHNDQUF3QztBQVF4QyxJQUFhLGtCQUFrQjtJQUczQjtRQURBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsb0NBQW9DLENBQUM7UUFDM0UsK0VBQStFO0lBQ2pGLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQ2pELENBQUM7O0dBRVcsa0JBQWtCLENBUzlCO0FBVFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJleGVyY2lzZXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2VqZXJjaWNpb3MvZWplcmNpY2lvcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2VqZXJjaWNpb3MvZWplcmNpY2lvcy5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGVyY2lzZXNDb21wb25lbnRcclxue1xyXG4gICAgcGRmU3JjID0gXCJcIjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBsZXQgY3VycmVudEFwcEZvbGRlciA9IGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVzdGUgZm9sZGVyOiBcIiArIGN1cnJlbnRBcHBGb2xkZXIucGF0aCk7XHJcbiAgICB0aGlzLnBkZlNyYyA9IGN1cnJlbnRBcHBGb2xkZXIucGF0aCArIFwiL2FwcEZpbGVzL2VqZW1wbG9zT3B0aW1pemFjaW9uLnBkZlwiO1xyXG4gICAgLy8gdGhpcy5wZGZTcmMgPSBcImh0dHBzOi8vd3d3LnByaW5jZXhtbC5jb20vc2FtcGxlcy9pbnZvaWNlL2ludm9pY2VzYW1wbGUucGRmXCI7XHJcbiAgfVxyXG59Il19