import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-list',
  imports: [],
  templateUrl: './my-list.html',
  styleUrl: './my-list.css',
})
export class MyList {
  @Input() listofItem: string[] = [];
  @Input() isMultiple: boolean = false;

  @Output() onItemSelect = new EventEmitter<string | string[]>();

  currentSelectedItem: string = '';

  selectedId: string[] = [];

  courseName: string | number = '';

  onSelectItem(itemName: string) {
    debugger;
    if(this.isMultiple){
      const ItemIndex = this.selectedId.findIndex(m => m == itemName);
      if(ItemIndex  == -1){
        this.selectedId.push(itemName)
      }else{
        this.selectedId.splice(ItemIndex, 1)
      }
       this.onItemSelect.emit(this.selectedId)
    } else {
      this.currentSelectedItem = itemName;
      this.onItemSelect.emit(itemName);
    }
  }

  checkIfItemSelected(itemName: string){
    return this.selectedId.includes(itemName)
  }
}
