import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { api } from "../api/api";
import { store } from "../redux/store";
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
        password: ''
    };

    constructor(private http: HttpClient, private router: Router) {
        const state=store.getState()
        console.log('Current Auth State:', state);
    }

    Login() {
        this.http.post(`${api}/auth/login`, this.user)
            .subscribe((res: any) => {
                const result = res?.data
                console.log(result)
                if (res?.message) {
                    alert('login')
                    store.dispatch({ type: 'AUTH', payload: { gmail: result?.Gmail,password:result?.Phonenumber} });
                    this.router.navigate(['/'])
                } else {
                    alert('user not found')
                    console.log('Gmail not found in the response');
                }
            },
                error => {
                    console.error('Error sending data:', error);
                }
            );
    }

    SignUp() {
        this.router.navigate(['/signup'])
    }

    signInWithGoogle() { }

    signInWithGitHub() { }
}
