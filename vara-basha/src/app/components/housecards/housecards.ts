import { Component, Input } from '@angular/core';
import { House } from './house.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-housecards',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './housecards.html',
  styleUrls: ['./housecards.css'],
})
export class Housecards {
  @Input() house!: House;

  logData()  { 
    this.house.isWifiAvailable = !this.house.isWifiAvailable;
  }
}