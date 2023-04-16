import { Component } from '@angular/core';

@Component({
  selector: 'app-services-panel',
  templateUrl: './services-panel.component.html',
  styleUrls: ['./services-panel.component.scss']
})
export class ServicesPanelComponent {
  services = [
    { title: 'Travel', description: 'Travelling is an exhilarating experience that allows you to explore new places, meet new people, and immerse yourself in different cultures.' },
    { title: 'Travel Arrangements', description: 'We provide a wide range of services that can include itinerary planning, flight and hotel reservations, transportation arrangements, tour bookings, travel insurance, and more.' },
    { title: 'Our Professional Guide', description: 'Guide travel agency includes having a local expert who can offer insider knowledge about the destinations you visit.' },
    { title: 'Activities', description: 'Activities travel agencies work with local vendors and partners to create customized itineraries that cater to the interests and preferences of their clients. ' }
  ];
}
