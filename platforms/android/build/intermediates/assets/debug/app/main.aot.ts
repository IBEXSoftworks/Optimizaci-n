import { platformNativeScript } from "nativescript-angular/platform-static";
import { AppModuleNgFactory } from "./modules/app.module.ngfactory";

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
