import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBar } from '../../Reusable/progress-bar/progress-bar';

@Component({
  selector: 'app-for-loop',
  imports: [NgFor, FormsModule, NgIf, ProgressBar],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {

  cityList: string[] = ['Jaipur', 'Nagpur', 'Mumbai', 'Pune']
  studentList = [
    {studId:123,isActive: true, attendancePeer:90, email:'chetan@gmail.com',state:'MH', name: 'chetan', city: 'Pune' },
    {studId:124,isActive: true, attendancePeer:50,email:'Rahul@gmail.com',state:'MH', name: 'Rahul', city: 'Jaipur' },
    {studId:125,isActive: false,attendancePeer:20,  email:'Tanmay@gmail.com',state:'MH', name: 'Tanmay', city: 'Mumbai' },
    {studId:126,isActive: true, attendancePeer:10, email:'Sahil@gmail.com',state:'Rajsthan', name: 'Sahil', city: 'Udiapur' },
    {studId:127,isActive: false,attendancePeer:40, email:'Jagan@gmail.com',state:'MH', name: 'Jagan', city: 'Hingna' },
    {studId:128,isActive: true, attendancePeer:60, email:'Sachin@gmail.com',state:'Rajsthan', name: 'Sachin', city: 'Jaipur' },
    {studId:129,isActive: true, attendancePeer:97, email:'punam@gmail.com',state:'Goa', name: 'punam', city: 'Panji' },
  ]
}
