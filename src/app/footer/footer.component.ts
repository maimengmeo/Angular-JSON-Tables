import { Component, Input } from '@angular/core';
import {Bio} from '../interface/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() student!: Bio;
  date = new Date();
}
