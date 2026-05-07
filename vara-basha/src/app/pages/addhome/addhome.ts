import { Component, signal } from '@angular/core';
import { House } from '../../components/housecards/house.model';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-addhome',
  imports: [FormField],
  templateUrl: './addhome.html',
  styleUrl: './addhome.css',
})
export class Addhome {
  addHomeSignal =  signal<House>({
    name: '',
    state: '',
    price: 0,
    rooms: 0,
    toilets: 0,
 description: '',
 photo: "",
    isWifiAvailable: false,
  });


  addHomeForm = form(this.addHomeSignal);

   addHouse() {
  const houseData = this.addHomeForm;

  console.log("Form submitted:", houseData);

  // pretend API response handling
  const response = {
    success: true,
    data: houseData,
  };

  console.log("Response:", response);
}
}