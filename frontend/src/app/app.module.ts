import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})

export class AppRoutingModule{}