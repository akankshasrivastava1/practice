import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-image',
  imports: [],
  templateUrl: './my-image.html',
  styleUrl: './my-image.css',
})
export class MyImage {
  @Input() imgSrc: string = '';
  @Input() height: string = '';
  @Input() width: string = '';
  
}
