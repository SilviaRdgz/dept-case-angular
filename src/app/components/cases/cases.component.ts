import { Component, HostListener } from '@angular/core';
import { fadeTitle } from '../../modules/animations';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  animations: [
    fadeTitle
  ]
})
export class CasesComponent {

  @HostListener('window:scroll', ["$event"])

  onScroll(event: any) {
    let modify = document.getElementById('text-container')!;
    let pos = (document.documentElement.scrollTop
        || document.body.scrollTop)
      + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    if ((pos >= max)) {
      modify.classList.add('hide-text');
      modify.classList.remove('show-text');
    } else {
      modify.classList.remove('hide-text');
      modify.classList.add('show-text');
    }
  }

  topFourCases = [
    {
      image: '/assets/images/bol.png',
      name: 'bol.com',
      description: 'A Summer island in the Netherlands',
      url: ''
    },
    {
      image: '/assets/images/kenpen.png',
      name: 'Kenpen',
      description: 'Not some average banking website',
      url: ''
    },
    {
      image: '/assets/images/philips.png',
      name: 'Philips',
      description: 'Beautiful design meets innovative technology',
      url: ''
    },
    {
      image: '/assets/images/gemeente-museum.png',
      name: 'Gemeentemuseum',
      description: 'A 100 years of Mondriaan & De Stijl',
      url: ''
    },
  ];

  bottomFourCases = [
    {
      image: '/assets/images/chocomel.png',
      name: 'chocomel',
      description: 'A campaign for the limited edition letter packs',
      url: ''
    },
    {
      image: '/assets/images/jbl.png',
      name: 'jbl',
      description: 'Live like a champion with Jerome Boateng',
      url: ''
    },
    {
      image: '/assets/images/zalando.png',
      name: 'zalando',
      description: 'Innovative SEO and content strategy for Zalando',
      url: ''
    },
    {
      image: '/assets/images/koninklijke.png',
      name: 'koninklijke bibliotheek',
      description: 'A 100 years of Mondriaan & De Stijl',
      url: ''
    },
  ];
  topTwoCases = [
    {
      image: '/assets/images/be-lightning.png',
      name: 'be lightning',
      description: 'Delivering clarity on a global scale',
      url: ''
    },
    {
      image: '/assets/images/tui.png',
      name: 'tui',
      description: 'Swipe to find your next holiday destination',
      url: ''
    },
  ];
  bottomTwoCases = [
    {
      image: '/assets/images/liberty-global.png',
      name: 'liberty global',
      description: 'Delivering complex commerce solutions',
      url: ''
    },
    {
      image: '/assets/images/arla.png',
      name: 'arla',
      description: 'Swipe to find your next holiday destination',
      url: ''
    },
  ];
  topClientNote = [
    {
      name: 'microsoft',
      description: 'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      url: ''
    },
    {
      name: "o'neil",
      description: 'Integrating existing content into O’Neills’s new e-commerce platform',
      url: ''
    },
    {
      name: 'microsoft',
      description: 'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      url: ''
    }
  ];
  bottomClientNote = [
    {
      name: 'amazon',
      description: 'Starting with delivering through drones',
      url: ''
    },
    {
      name: "o'neil",
      description: 'Integrating existing content into O’Neills’s new e-commerce platform',
      url: ''
    },
    {
      name: 'microsoft',
      description: 'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      url: ''
    }
  ];

}

