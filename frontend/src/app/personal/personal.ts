import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { api } from "../api/api";

@Component({
    selector: 'personal',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './personal.html',
    styleUrls: ['./personal.css']
})

export class Personal {

    user = {
        gmail: "",
        name: '',
        phone: "",
        role: "",
        linkedin: "",
        github: '',
        hackerank: '',
        file: '',
    }

    constructor(private http: HttpClient, private router: Router) {
        
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.user.file = file;
        }
    }

    Register() {
        const formdata = new FormData();
        formdata.append('name', this.user.name)
        formdata.append('gmail', this.user.gmail)
        formdata.append('phone', this.user.phone)
        formdata.append('role', this.user.role)
        formdata.append('linkedin', this.user.linkedin)
        formdata.append('github', this.user.github)
        formdata.append('hackerank', this.user.hackerank)
        formdata.append('file', this.user.file)

        this.http.post(`${api}/auth/register`, formdata).subscribe(
            response => {
                console.log('Data sent successfully:', response);
            },
            error => {
                console.error('Error sending data:', error);
            }
        );
    }

    SignIn() {
        this.router.navigateByUrl('/signin')
    }
}
