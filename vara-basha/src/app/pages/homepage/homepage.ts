import { Component } from '@angular/core';
import { Housecards } from '../../components/housecards/housecards';
import { Houses } from './houses';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-homepage',
  imports: [Housecards, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  houses = Houses; 
}
