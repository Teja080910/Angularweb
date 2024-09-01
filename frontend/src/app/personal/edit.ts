import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { api } from "../api/api";
import { UserDataService } from "../data.service";
import { CheckUser } from "../actions/checkuser";
import { store } from "../redux/store";

@Component({
    selector: 'personaledit',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './edit.html',
    styleUrls: ['./edit.css']
})
export class PersonalEdit implements OnInit {
    user = {
        Name: '',
        Gmail: '',
        Phonenumber: '',
        Role: '',
        Photo: ''
    };

    personal = {
        gmail: store.getState().counter.gmail,
        password: store.getState()?.counter?.password,
    };

    constructor(private http: HttpClient,
        private router: Router,
        private userDataService: UserDataService
    ) { }

    ngOnInit() {
        this.getUserData();
    }

    Close() {
        this.userDataService.updateUserData(false);
    }

    getUserData() {
        CheckUser(this.personal, this.http)
            .then((data: any) => {
                this.user = data
            })
            .catch((e: any) => console.log(e))
    }

    updateUserData() {
        this.http.put(`${api}/user-profile`, this.user).subscribe(response => {
            console.log('User data updated successfully', response);
            this.router.navigate(['/profile']);
        });
    }
}
