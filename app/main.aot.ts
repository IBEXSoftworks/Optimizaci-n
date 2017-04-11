import { platformNativeScript } from "nativescript-angular/platform-static";
import { AppModuleNgFactory } from "./pages/app.module.ngfactory";

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
