import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class MyButton {
  @Input() btnText: string = '';

  @Input() btnType: 'primary' | 'secondary' = 'primary';

  @Output() onBtnClick = new EventEmitter<void>();

  onBtnclick(){
    this.onBtnClick.emit();
  }
}
