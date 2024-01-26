import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Angular app created by teja ok';

  d:string=new Date().toLocaleTimeString()
  
  // timeid=setInterval(()=>{
  //   this.d=new Date().toLocaleTimeString();
  // },1000)

  test()
  {
    return this.title;
  }

  isdisable:boolean=false;
  isactive:boolean=true;

  cvar:string="green";

  mystyle:object=
  {
    color:"red",
    background:"blue",
    fontSize:'30px'
  }

  change()
  {
    this.cvar="red";
    this.isactive=false;
  }

  changecolor(e:any)
  {
    this.cvar=e.target.value;
  }

  
  
}
