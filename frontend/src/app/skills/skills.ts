import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Personal } from "../personal/personal";
import { CheckUser } from "../actions/checkuser";
import { store } from "../redux/store";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'skills',
    standalone: true,
    imports: [CommonModule, FormsModule, Personal],
    templateUrl: './skills.html',
    styleUrls: ['../home/home.css','../home/plus.css', './skills.css']
})

export class Skill implements OnInit {
    personal = {
        gmail: store.getState().counter.gmail,
        password: store.getState()?.counter?.password,
    };

    Skills = [
        { name: '', progress: 0 },
    ];


    constructor(private http: HttpClient) { }

    checkSkills() {
        CheckUser(this.personal, this.http)
            .then((data) => {
                this.Skills = data.Skills
                console.log(data?.Skills)
            })
            .catch((e) => console.log(e))
    }

    ngOnInit(): void {
        this.checkSkills()
        console.log(this.Skills[0])
    }

}
