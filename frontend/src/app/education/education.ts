import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'education',
    standalone: true,
    imports: [CommonModule, FormsModule, Personal],
    templateUrl: './education.html',
    styleUrls: ['../home/home.css', '../home/plus.css']
})

export class Education {

    education = [{
        institution: '',
        degree:''
    }];
}
