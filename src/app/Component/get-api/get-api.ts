import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})

export class GetAPI {
  UserList: any [] = [];
  PostsList: any [] = [];

  constructor(private http: HttpClient){

  }
  
  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.UserList = res;
    })
  }

  getAllPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
      this.PostsList = res;
    })
  }
}
