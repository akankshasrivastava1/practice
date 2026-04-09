import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
   @Input() tabList: string[]= [];
   @Output() onTabChange = new EventEmitter<string>();

  selectedTab: string = '';

  onSelectTab(tabName: string) {
    this.selectedTab =  tabName;
    this.onTabChange.emit(tabName);
  }
}
