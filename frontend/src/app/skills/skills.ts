import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'skills',
    standalone: true,
    imports: [CommonModule, FormsModule, Personal],
    templateUrl: './skills.html',
})

export class Skill {
    skills = ["HTML", "CSS", "JavaScript", "Angular", "Node.js"];
}
