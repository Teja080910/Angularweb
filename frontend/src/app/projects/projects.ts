import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'projects',
    standalone: true,
    imports: [CommonModule, FormsModule, Personal],
    templateUrl: './projects.html',
    styleUrls: ['../home/home.css','../home/plus.css']
})

export class Projects {
    project = [{
        role: "",
        company: "",
        duration: ""
    },
    ];
}
