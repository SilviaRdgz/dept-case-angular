import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  logos = [
    {
      image: '/assets/logos/google.svg',
    },
    {
      image: '/assets/logos/levis.svg',
    },
    {
      image: '/assets/logos/spotify.svg',
    },
    {
      image: '/assets/logos/patagonia.svg',
    },
    {
      image: '/assets/logos/adyen.svg',
    },
    {
      image: '/assets/logos/audi.svg',
    },
    {
      image: '/assets/logos/tesla.svg',
    },
    {
      image: '/assets/logos/asos.svg',
    },
    {
      image: '/assets/logos/triumph-white.svg',
    },
    {
      image: '/assets/logos/netflix.svg',
    },
    {
      image: '/assets/logos/takeaway.svg',
    },
    {
      image: '/assets/logos/fujitsu.svg',
    },
  ]

}
