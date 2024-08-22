import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class Home {
    personalDetails = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890"
    };

    education = [
        { degree: "B.Sc Computer Science", institution: "University A" },
        { degree: "M.Sc Data Science", institution: "University B" }
    ];

    skills = ["HTML", "CSS", "JavaScript", "Angular", "Node.js"];

    experience = [
        { role: "Software Engineer", company: "Tech Company A", duration: "2 years" },
        { role: "Frontend Developer", company: "Tech Company B", duration: "1.5 years" }
    ];
}
