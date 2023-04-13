import { Component, Input } from '@angular/core';
import { Landings } from '../interface/interfaces';

@Component({
  selector: 'app-json-button',
  templateUrl: './json-button.component.html',
  styleUrls: ['./json-button.component.css']
})
export class JsonButtonComponent {
  @Input() landings!: Landings[]; 
}
