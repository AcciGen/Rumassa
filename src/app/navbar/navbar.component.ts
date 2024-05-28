import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './navbar-service.service';
import { AuthsService } from '../services/auth.service';
import { Router } from '@angular/router';
import { categoryModel } from '../interfaces/categoryModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  checker = false;
  constructor(private navbarService: NavbarServiceService, private readonly authsService: AuthsService, private router: Router) { }
  ngOnInit(): void {
    // this.getAll()
    this.check()
  }
  categories !: categoryModel[]

  getAll() {
    this.navbarService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
  check() {
    if (this.authsService.isAuthorized() === true) {
      this.checker = true;
    }
    else {
      this.checker = false;
    }
  }
  logout()
  {
    this.authsService.logOut();
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
      setTimeout(() => {
        window.location.reload();
      }, 1);
    });
  }


}
