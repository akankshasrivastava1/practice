import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user/user";

@Component({
  selector: 'app-hooks',
  imports: [User],
  templateUrl: './hooks.html',
  styleUrl: './hooks.css',
})
export class Hooks implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, DoCheck{

  router2 = inject(Router); //16

  courseName: string;
  
  constructor(private router: Router){
    console.log("constructor") 
    this.courseName = ''; //variable initialization
  }

  ngOnInit(): void {
    console.log("ngOnInit")// initialized when compenent is ready, UI is not render before it trigger
    //api call
    //subscription
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit") //one component render another component  content start the initialization once done the initilation 
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked") // then content checked the all content initailazed well are not
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit") // once all content initialization then comes view initialization
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked") // all html code successfull initialized
  }

  ngDoCheck(): void {
    console.log("ngDoCheck") // whenever changes happens this changes happens
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy") //whenever component destroy this life cycle event trigger
  }

  // Whenever variable change docheck checking 
  //ngDoCheck
  //ngAfterContentChecked
  //ngAfterViewInit
  
}

