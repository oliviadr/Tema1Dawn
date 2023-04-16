import { Injectable } from '@angular/core';
import { City } from '../models/cities';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  cities: City[]=[
    { name: 'Brasov', image: '/assets/images/brasov.jpg', description: 'Brasov is a beautiful city located in the Transylvania, Romania, known for its charming old town, medieval architecture, and stunning natural surroundings. ' },
    { name: 'Sibiu', image: '/assets/images/sibiu.jpg', description: 'Sibiu is a beautiful medieval city located in the heart of Transylvania, Romania, known for its well-preserved historic center and cultural landmarks.'},
    { name: 'Bucuresti', image: '/assets/images/bucuresti.jpg', description: 'Bucharest is the dynamic capital city of Romania, known for its mix of historic and modern architecture, lively nightlife, and cultural attractions.'},
    { name: 'Oradea', image: '/assets/images/oradea.jpg', description: 'Oradea is a charming city located in the northwestern region of Romania, known for its Art Nouveau architecture, thermal baths, and vibrant cultural scene.' },
    { name: 'Iasi', image: '/assets/images/iasi.jpg', description: 'Iasi is a vibrant university city in northeastern Romania,called Moldova, known for its rich history, beautiful architecture, and lively cultural scene.'},
    { name: 'Cluj', image: '/assets/images/cluj.jpg', description: 'Cluj-Napoca, is a vibrant city located in the heart of Transylvania, Romania. It is known for its rich history, beautiful architecture, cultural landmarks.'}
  ];

  getCities(){
    return this.cities
  };

}
