import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyList } from "../../Reusable/my-list/my-list";



@Component({
  selector: 'app-ng-if',
  imports: [FormsModule, MyList],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})

export class Ngif {
  selectedGender: string = "";
  selectedCategory: string = "";
  isDiv1visible: boolean = true;
  isvisible: boolean = true;
  isActive: boolean = true;
  mobile: string[] = ['samsung', 'iphone', 'oneplus'];
  laptop: string[] = ['dell', 'hp', 'lenovo'];
  camera: string[] = ['canon', 'sony', 'nikon'];

  onHideDiv1(){
    this.isDiv1visible = false;
  }
  
  onShowDiv1(){
    this.isDiv1visible = true;
  }

  toggleDiv(){
    this.isvisible = !this.isvisible;
  }
}
