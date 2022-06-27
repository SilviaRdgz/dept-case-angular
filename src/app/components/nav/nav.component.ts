import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fade } from '../../modules/animations';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    fade
  ]
})


export class NavComponent {

  isMenuOpen: boolean = false;
  crossIcon: boolean = false;
  burgerIcon: boolean = false;
  dotsIcon: boolean = false;
  navbarItems: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.crossIcon = !this.crossIcon;
    this.burgerIcon = !this.burgerIcon;
    this.dotsIcon = !this.dotsIcon;
    this.navbarItems = !this.navbarItems;
  }


  items = [
    {
      title: 'home'
    },
    {
      title: 'work'
    },
    {
      title: 'culture'
    },
    {
      title: 'services'
    },
    {
      title: 'partners'
    },
    {
      title: 'stories'
    },
    {
      title: 'careers'
    },
    {
      title: 'events'
    },
    {
      title: 'contact'
    }
  ]
}
