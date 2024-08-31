import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'pleasewait',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule, Personal],
    templateUrl: './pleasewait.html',
})

export class PleaseWait {}
