import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-list',
  imports: [],
  templateUrl: './my-list.html',
  styleUrl: './my-list.css',
})
export class MyList {
  @Input() listofItem: string[] = [];
}
