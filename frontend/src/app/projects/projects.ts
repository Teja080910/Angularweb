import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";

@Component({
    selector: 'projects',
    standalone: true,
    imports: [CommonModule, FormsModule,Personal],
    templateUrl: './projects.html',
    // styleUrls: ['./home.css']
})

export class Projects {
    experience = [
        { role: "Software Engineer", company: "Tech Company A", duration: "2 years" },
        { role: "Frontend Developer", company: "Tech Company B", duration: "1.5 years" }
    ];
}
