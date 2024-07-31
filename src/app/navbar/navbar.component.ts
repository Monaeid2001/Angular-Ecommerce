import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgStyle,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {
  }
goHome(){
  this.router.navigate(['homepage',HomepageComponent])
}
}
