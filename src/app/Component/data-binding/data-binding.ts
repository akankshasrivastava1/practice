import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alert } from '../../Reusable/alert/alert';
import { ProgressBar } from '../../Reusable/progress-bar/progress-bar';
import { Tabs } from '../../Reusable/tabs/tabs';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, DatePipe, SlicePipe, Alert, ProgressBar, Tabs],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})

export class DataBinding {
  courseName: string = "Angular";
  isDisabled: boolean = true;
  myInputType: string = 'checkbox';
  myclassname = "col-2 bg-danger";
  maxCharAllowed = 6;
  minChar = 5;
  selectedCity = "";
  isActive: boolean = true;

  rollNoList = [11, 12, 13,14,15,16,17,18,19]

  currentDate: Date = new Date();

  EmpObj = {
    name: "Akanksha",
    city: "Pune",
    state: "MH",
    address: {
      pincode: 411057,
      city: "Mumbai"
    }
  }

  changeCourse(name: string){
    this.courseName = name;
  }

  showWelcomedText(){
    alert('Welcome to Angular');
  }

  showMessage(msg: string) {
    alert(msg);
  }

  onCityChanged(event: any){
    this.selectedCity = event.target.value;
    alert('City changed to ' + this.selectedCity);
  }

  mouseEnter(){
    console.log('Mouse Entered');
  }

  mouseLeave(){
    console.log('Mouse Left');
  }
}

