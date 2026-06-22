import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Service/userService';
import { Alert } from '../../Reusable/alert/alert';
import { ProgressBar } from '../../Reusable/progress-bar/progress-bar';
import { Tabs } from '../../Reusable/tabs/tabs';
import { MyButton } from '../../Reusable/my-button/my-button';
import { MyImage } from "../../Reusable/my-image/my-image";
import { MyList } from "../../Reusable/my-list/my-list";

@Component({
  selector: 'app-category',
  imports: [ReactiveFormsModule, Alert, ProgressBar, Tabs, MyButton, MyImage, MyList],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    categoryId: new FormControl(0),
    categoryName: new FormControl("", [Validators.required,
    Validators.minLength(4)
    ]),
    isActive: new FormControl('')
  })

  alertMesaage: string = "This is from Category Page";
  myTabList: string[] = ["Category List", "Category Form"]

  usrSrv = inject(UserService);

  categoryList = signal<any>([]);
  currentTab: string = '';

  getTabChange(tabName: string) {
    debugger;
    this.currentTab = tabName;
  }

  newcategory: any = {
    "categoryId": 0,
    "categoryName": "",
    "isActive": ''
  }


  ngOnInit(): void {
    this.getAllCategory();
  }

  onSaveBtnClicked() {
    debugger;
  }

  onUpdateBtnClicked() {
    debugger;
  }

  onEdit(data: any) {
    this.categoryForm = new FormGroup({
      categoryId: new FormControl(data.categoryId),
      categoryName: new FormControl(data.categoryName),
      isActive: new FormControl(data.isActive)
    })
    this.currentTab = "Category Form"
  }

  getSelectedItem(itemName: string | string[]) {
    debugger;
  }

  getAllCategory() {
    this.usrSrv.getCategory().subscribe({
      next: (res: any) => {
        this.categoryList.set(res.data)
        debugger;
      }
    })
  }

  onReset(data: any) {
    this.categoryForm = new FormGroup({
      categoryId: new FormControl(data.categoryId),
      categoryName: new FormControl(data.categoryName),
      isActive: new FormControl(data.isActive)
    })
  }

  onSaveCategory() {
    // in reactive form can't call API directly
    const formvalue = this.categoryForm.value;
    debugger;
    this.usrSrv.onSaveCategory(formvalue).subscribe({
      next: (res: any) => {
        debugger;
        this.getAllCategory();
      }
    })
  }

}
