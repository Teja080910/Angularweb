import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { store } from "./redux/store";

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },{provide: store, useValue:store}],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})

export class AppRoutingModule{}