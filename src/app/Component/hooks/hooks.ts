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
  
  constructor(private router: Router){
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")// initialized when compenent is ready, UI is not render before it trigger
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked") // one component render another component
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit") // content start the initialization once done the initilation then content checked the all content initailazed well are not
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

  
}

