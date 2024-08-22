import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string = 'Angular app created by Teja OK';

  // Uncomment and use these if needed

  // d: string = new Date().toLocaleTimeString();

  // timeId = setInterval(() => {
  //   this.d = new Date().toLocaleTimeString();
  // }, 1000);

  // test() {
  //   return this.title;
  // }

  // isDisable: boolean = false;
  // isActive: boolean = true;

  // cVar: string = "green";

  // list = ["Teja", "Siva", "Sai"];

  // myStyle: object = {
  //   color: "red",
  //   background: "blue",
  //   fontSize: '30px'
  // };

  // change() {
  //   this.cVar = "red";
  //   this.isActive = false;
  // }

  // changeColor(e: any) {
  //   this.cVar = e.target.value;
  // }
}
