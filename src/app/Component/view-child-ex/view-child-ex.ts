import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Signal } from '../signal/signal';

@Component({
  selector: 'app-view-child-ex',
  standalone: true,
  imports: [Signal],
  templateUrl: './view-child-ex.html',
  styleUrl: './view-child-ex.css',
})
export class ViewChildEx implements AfterViewInit {

  @ViewChild('myText') myTextElement!: ElementRef;
  @ViewChild('myDiv') myDivElement!: ElementRef;
  @ViewChild(Signal) signalComponentInstance!: Signal;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    console.log(this.myDivElement.nativeElement.innerText);
  }

  readText() {
    const textValue = this.myTextElement.nativeElement.value;
    console.log(textValue);
  }

  addCss() {
    this.renderer.setStyle(
      this.myDivElement.nativeElement,
      'background-color',
      'red'
    );
  }

  readSignal() {
    const course = this.signalComponentInstance.courseName;
    console.log(course);
  }
}