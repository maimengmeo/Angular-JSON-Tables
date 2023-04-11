import { Component, Input } from '@angular/core';
import {Bio} from '../interface/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() student!: Bio;
}
