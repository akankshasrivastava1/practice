import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../Service/userService';
import { Ngif } from '../ng-if/ng-if';

@Component({
  selector: 'app-user',
  imports: [FormsModule, JsonPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit{

  http = inject(HttpClient); // 16 - authguard , interceptor because these have function doesn't have constructor

  userService = inject(UserService);

  userList = signal<any>([]);
  newUserObj: any ={
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  };

  onReset(){
    this.newUserObj = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  };
}

  constructor(){
    //variable initialization
    debugger;
    this.getUsersListFromService();
    const getMaskedCardNo = this.userService.getMaskedCardNo("5486012374078234");
    const course = this.userService.courseName;
  }

  ngOnInit(): void {
    //API calls
    this.getUsersListFromService();
  }

  getUsers(){
    debugger;
    this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers").subscribe((result:any)=>{
      this.userList.set(result.data);
    })
  }

  getUsersListFromService(){
    this.userService.getAllUsersData().subscribe({
      next:(result:any) =>{
        this.userList.set(result.data);
      }
    })
  }

  getAllUsers() {
     this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers").subscribe({
      next:(result:any) =>{
        this.userList.set(result.data)
      },
      error:(error)=>{
        alert("API Error" + error)
      }
     })
  }

  // onSaveUser() {
  //   this.http.post("https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer",this.newUserObj).subscribe(res=>{
  //     this.getUsers();
  //     debugger;
  //   })
  // }

  onSaveUser(form: NgForm) {
    this.userService.saveUser(this.newUserObj).subscribe({
      next:(res:any) => {
        this.getUsers();
      }
    })
  }

  onUpdateUser(){
     this.http.put("https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer",this.newUserObj).subscribe(res=>{
      this.getUsers();
      debugger;
  })
}

onDeleteUser(id: number){
  debugger;
  const isDelete = confirm("Are you sure want to Delete");
  if(isDelete == true) {
    this.http.delete("https://api.freeprojectapi.com/api/BankLoan/DeleteUserByUserId?userId="+id).subscribe(res=>{
    this.getUsers();
  })
  }
}
  onEdit(data: any){
    this.newUserObj = {...data};
  }
}
