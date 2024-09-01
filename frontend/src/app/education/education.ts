import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDataService } from '../data.service';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './education.html',
  styleUrls: ['../home/home.css']
})
export class Education implements OnInit {
  education = [
    { degree: "B.Sc Computer Science", institution: "University A" }
  ];

  constructor(
    private http: HttpClient,
    private router: Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.userDataService.currentUserData.subscribe(data => {
      if (data && data.education) {
        this.education = data.education;
      }
    });
  }

  addEducation() {
    this.education.push({ degree: '', institution: '' });
  }

  removeEducation(index: number) {
    this.education.splice(index, 1);
  }

  updateUserData() {
    
  }

  Close() {
    // Logic to hide the modal
    // If using ng-bootstrap:
    // this.modalService.dismissAll();
    // Otherwise, manually hide the modal
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }
}
