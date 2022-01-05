import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  showMenu = false;
  public appPages = [
    { title: 'Full-Text', url: '/search/full-text' },
    { title: 'Geo', url: '/search/geo' },
    { title: 'Date', url: '/search/date' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.showSideMenu();
  }

  showSideMenu() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = !(this.router.url === '/login' || this.router.url === '/register');
        this.showMenu = true;
      }
    });
  }

}
