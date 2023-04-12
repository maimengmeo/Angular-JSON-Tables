import { Component, Input } from '@angular/core';
import { Landings } from '../interface/interfaces';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css']
})
export class JsonListComponent {
  @Input() landings!: Landings[];

  displayedColumn: string[] = ["id", "name", "mass", "year"];
}
