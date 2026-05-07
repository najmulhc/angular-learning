import { Component, Input, input } from '@angular/core';
import { HouseCardData } from '../house-card-data';
 
@Component({
  selector: 'app-house-cards',
  imports: [],
  templateUrl: './house-cards.html',
  styleUrl: './house-cards.css',
})
export class HouseCards {
  @Input() house !: HouseCardData; 
}
