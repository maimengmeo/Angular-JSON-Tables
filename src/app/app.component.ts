import { Component } from '@angular/core';
import {Bio} from './interface/interfaces';
import data from '../assets/data/A4.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4phamtuye';

  bio: Bio = data.A4Student;
}
