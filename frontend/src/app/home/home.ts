import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faEdit, faSignOutAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CheckUser } from "../actions/checkuser";
import { OpenFile } from "../actions/openphoto";
import { Education } from "../education/education";
import { Experience } from "../experience/experience";
import { Personal } from "../personal/personal";
import { Projects } from "../projects/projects";
import { store } from "../redux/store";
import { Skill } from "../skills/skills";
import { PersonalEdit } from "../personal/edit";
import { UserDataService } from "../data.service";

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule,
        FormsModule,
        HttpClientModule,
        Personal,
        Skill,
        Experience,
        Education,
        Projects,
        FontAwesomeModule,
        PersonalEdit
    ],
    templateUrl: './home.html',
    styleUrls: ['./home.css', './plus.css']
})

export class Home implements OnInit, OnChanges {

    personal = {
        gmail: store.getState().counter.gmail,
        password: store.getState()?.counter?.password,
        loading: false,
        faedit: faEdit,
        fatrash: faTrash,
        fasignout: faSignOutAlt,
        edit: false,
    };

    user = {
        Gmail: "",
        Name: '',
        Phonenumber: "",
        Role: "",
        Links: [],
        Photo: '',
    }

    constructor(private http: HttpClient, private router: Router, private userDataService: UserDataService) {
        
    }

    Openfile(photo: string) {
        if (photo) {
            OpenFile(photo, this.http).then((fileData: any) => {
                if (fileData) {
                    this.user.Photo = fileData?.url
                }
            }).catch(error => {
                console.error('Error loading file:', error);
            });
        }
    }

    checkuser() {
        try {
            if (!this.user?.Gmail) {
                CheckUser(this.personal, this.http)
                    .then((data: any) => {
                        this.Openfile(data?.Photo)
                        this.personal.loading = true
                        this.user = data
                    })
                    .catch((e: any) => console.log(e))
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    Edit() {
        this.personal.edit = true;
        this.userDataService.updateUserData(true);
    }

    Logout() {
        store.dispatch({ type: 'AUTH', payload: { gmail: '', password: '' } });
    }

    ngOnInit(): void {
        if (!this.user?.Gmail) {
            this.checkuser();
        }

        !this.personal.loading ? !this.personal.gmail[1] ? this.router.navigateByUrl('/signin') : this.router.navigateByUrl('') : ' '

        this.userDataService.currentUserData
            .subscribe((data: any) => { this.personal.edit = data })
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['personal'] && changes['personal'].currentValue) {
            console.log('Updated State:', this.user);
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