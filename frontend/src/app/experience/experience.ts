import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'experience',
    standalone: true,
    imports: [CommonModule, FormsModule, Personal],
    templateUrl: './experience.html',
    styleUrls: ['../home/home.css', '../home/plus.css']
})

export class Experience {
    experience = [{
        role: "",
        company: "",
        duration: ""
    },
    ];
}
