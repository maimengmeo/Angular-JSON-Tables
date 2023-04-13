import { Component, Input } from '@angular/core';
import { Landings } from '../interface/interfaces';

@Component({
  selector: 'app-json-button',
  templateUrl: './json-button.component.html',
  styleUrls: ['./json-button.component.css']
})
export class JsonButtonComponent {
  @Input() landings!: Landings[]; 

  outarea!: string;

  landingsInCentury(century: number) {
    this.outarea = 
    `
    <h4>Meteorite Landings in the ${century}00s</h4>
    <ul>
    `;

    for (let x of this.landings) {
      if (parseInt(x.year) >= century && parseInt(x.year) < century+100) {
        this.outarea += 
        `          
            <li>ID: ${x.id}/ Name: ${x.name}/ Year: ${x.year}</li>
        `
      }
    }

    this.outarea += `</ul>`
  }
}
