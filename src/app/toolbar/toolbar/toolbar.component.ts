import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  isToggled: boolean = false;

  constructor(private router: Router){}

  home(){
  this.router.navigate(['dashboard/alumnos']);
}

usuarios(){
  this.router.navigate(['dashboard/usuarios']);
}

}
