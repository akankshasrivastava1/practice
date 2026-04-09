import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-department',
  imports: [],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit {

  http = inject(HttpClient)

  parentDeptList = signal<any>([])

  ngOnInit(): void {
    this.getAllParentDept();
  }

  getAllParentDept(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe({
      next:(res:any) => {
        this.parentDeptList.set(res.data)
      }
    })
  }
}
