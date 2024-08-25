import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})

export class AppRoutingModule{}