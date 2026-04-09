import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { from, interval, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-ex',
  imports: [],
  templateUrl: './rxjs-ex.html',
  styleUrl: './rxjs-ex.css',
})
export class RxjsEX {

  http = inject(HttpClient);
  cityList = ['Mumbai', 'Pune','Goa'];

  $stateList = of(["MH","Goa","Punjab"]);
  studentObj = of({name:'akank', city:'pune'})

  $rollNoList = from([11,12,2,14,15]);//emit one by one
//from expect only array
// promise and setinterval which will execute first -- first execute promise
// setinterval execute every 2 sec -- interval gurantee to execute
  $myInterval = interval(2000);

  currentRollNo: number = 122;

  $mySubject = new Subject<string>(); //multicast

  

  constructor(){
    const myPromise = new Promise((Resolve, reject)=>{
      reject("Error from promise")
    });
    // myPromise.then((res:any)=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    debugger;

    //convert promise to observable
    const newPromiseObj = of(myPromise);
    newPromiseObj.subscribe((res)=>{
      debugger
    },err=>{
      debugger;
    })

     const myObs = new Observable<string>((obs)=>{
      obs.next("Observable Success")
    });
    myObs.subscribe(res=>{
      console.log(res)
    })

    this.currentRollNo = 323;

    this.$stateList.subscribe((res:string[])=>{
      debugger;
    })
     this.studentObj.subscribe(res=>{
      debugger;
    })

    this.$rollNoList.subscribe(res=>{
      debugger;
    })

    this.$myInterval.subscribe(res=>{
      debugger;
      if(res>4){
        
      }
    })

    this.$mySubject.subscribe(res=>{
      debugger;
    })
    this.$mySubject.next('akanksha');
  }

  changeRollNo(){
    this.currentRollNo = 321;
  }

  changeSub(){
    this.$mySubject.next("akanksha")
  }
  

}


//observable vs Rxjs
//convert promise to observable