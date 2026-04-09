import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  courseName: string = "Angular 21";
  //subject and behviourSub from rxjs
  http = inject(HttpClient);

  getMaskedCardNo(cardNo: string) {
    const starStr = " **** **** **** ";
    const lastFourDigit = cardNo.slice(-4);
    return starStr + lastFourDigit;
  }

  getSumOfTwoNum(num1: number, num2: number) {
    return num1 + num2;
  }

  getAllUsersData() {
    debugger;
    return this.http.get("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers")
  }

  getCategory() {
    debugger;
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories")
  }
  saveUser(obj: any) {
    return this.http.post("https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer", obj)
  }

  onSaveCategory(obj: any){
    return this.http.post("https://api.freeprojectapi.com/api/Enquiry/create-category", obj)
  }

}
