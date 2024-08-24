import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'education',
    standalone: true,
    imports: [CommonModule, FormsModule,Personal],
    templateUrl: './education.html'
})

export class Education {

    education = [
        { degree: "B.Sc Computer Science", institution: "University A" },
        { degree: "M.Sc Data Science", institution: "University B" }
    ];
}
