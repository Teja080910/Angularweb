import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createStore } from "redux";
import { api } from "../api/api";
import { counterReducer } from "../redux/slice";
import { Personal } from "../personal/personal";
import { Router } from "@angular/router";

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule,Personal],
    templateUrl: './home.html',
    styleUrls: ['./home.css','./plus.css']
})

export class Home implements OnInit,OnChanges {
    store = createStore(counterReducer);
    
    personal = {
        gmail: this.store.getState().gmail
    };

    user={
        Gmail:"",
        Name:'',
        Phonenumber:"",
        Role:"",
        Links:[],
        Photo:'',
    }

    constructor(private http: HttpClient,private router:Router) {
        console.log('Updated State:', this.store.getState().gmail)
        console.log(typeof(this.personal.gmail[0]))
    }

    checkuser() {
        try {
            this.http.post(`${api}/auth/checkuser`, this.personal)
                .subscribe((res: any) => {
                    const gmail = res?.data?.gmail;
                    if (gmail) {
                        this.user=res?.data
                    } else {
                        console.log('Gmail not found in the response');
                    }
                },
                    error => {
                        console.error('Error sending data:', error);
                    }
                );
        } catch (error) {
            console.error('Error:', error);
        }
    }


    ngOnInit(): void {
        this.checkuser();
        !this.personal.gmail[0]?this.router.navigateByUrl('/signin'):this.router.navigateByUrl('')
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes){
            console.log("changed")
        }
    }



    

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
