import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createStore } from "redux";
import { api } from "../api/api";
import { counterReducer } from "../redux/slice";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class Login {

    user = {
        gmail: '',
        password:''
    };

    store = createStore(counterReducer);

    constructor(private http: HttpClient,private router:Router) {
        console.log('Updated State:', this.store.getState())
    }

    Login() {
        try {
            this.http.post(`${api}/auth/checkuser`, this.user)
                .subscribe((res: any) => {
                    const gmail = res?.data?.gmail;
                    if (gmail) {
                        this.store.dispatch({ type: 'AUTH', payload: { gmail } });
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

    SignUp(){
        this.router.navigate(['/signup'])
    }

    signInWithGoogle(){}

    signInWithGitHub(){}
}
