import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseCardData } from '../house-card-data';
import { HouseCards } from '../house-cards/house-cards';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HouseCards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  houses: HouseCardData[] = [
    {
      name: "Royal Guest House", 
      price: 99.50, 
      state: "NY", 
      rooms: 2, 
      isWifiAvailable: false
    },
    {
      name: "Cozy Cottage",
      price: 150.00,
      state: "CA",
      rooms: 3,
      isWifiAvailable: true
    }
  ];
}
