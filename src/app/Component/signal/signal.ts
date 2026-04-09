import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName: string = 'Angular';
  currentRollNo: number = 12;
  isProduct = false;

  courseDuration = signal("3 Months"); //Writable signals
  isBatchActive : WritableSignal<boolean> = signal(true);
  cityList = signal(["Pune","Mumbai","Nagpur"]);
  studObj = signal({
    name: 'John',
    city: 'pune',
    state: 'MH'
  })

  constructor() {
    setTimeout(()=>{
      this.courseName = "React.js";
    }, 3000); // variable with async code UI not change

    setTimeout(()=>{
      this.courseDuration.set("5 months and 2 weeks");
    }, 6000); // but with single UI code change
    //const course = this.courseName;
    this.currentRollNo = 114;

    effect(()=>{
      console.log(this.isBatchActive())
      const courseDurationFirstChar = this.courseDuration().charAt(0);
    })// dynamic behaviour in single whenever value change effect will execute -- many effect

    effect(()=>{
      const courseDurationFirstChar = this.courseDuration().charAt(0);
    }) // any of signal value used effect will execute
  }

  onDurationChange(){
    this.courseName = "playwright"
    // wrote code
    const duration = this.courseDuration();
    this.courseDuration.set("2 Months and 1 Week")
  }

  setNewDurationChange(){
    this.courseName = "playwright"
    // wrote code
    const duration = this.courseDuration();
    this.courseDuration.set("6 Months ")
  }

  addCity(){
    // const oldArray = this.cityList();
    // oldArray.push("Thane");
    // setTimeout(()=>{
    //    this.cityList.set(oldArray)
    // }, 2000);

    this.cityList.update(oldList => [...oldList,'Thane'])

    this.studObj.update(oldObj => ({...oldObj,name:'Adam'}))
  }

  addUPCity(){
    this.cityList.set(["Agra","Lucknow","Kanpur"]);
    this.studObj.set({name:'james', city:'Mumbai', state:'MH'})
  }
}
