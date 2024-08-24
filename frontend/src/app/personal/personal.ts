import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http"; 
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { api } from "../api/api";

@Component({
    selector: 'personal',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './personal.html',
    styleUrls: ['./personal.css']
})

export class Personal {
    
    personal = {
        name: "",
        email: "",
        phone: ""
    };

    constructor(private http: HttpClient) {}

    sendDataToServer() {
        this.http.post(`${api}/personal`, this.personal).subscribe(
            response => {
                console.log('Data sent successfully:', response);
            },
            error => {
                console.error('Error sending data:', error);
            }
        );
    }
}
