import { Component, OnInit } from '@angular/core';
import { Studentcourse} from '../../models/student.model';
@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {    
  courseselected= 0;
  modifiedcourse :String | undefined;
  ded = false;
  studentcourse: Studentcourse[]= [
    {id: 1,name: 'Choose..'},
    {id: 2,name: 'B.Tech'},
    {id: 3,name: 'M.B.A'}
  ];
  constructor() { 
  }
  ngOnInit(): void {
  }
  
  oncourseselected(val: any){
       if(this.courseselected == 1)
       {
         this.ded=true;
       }
  }
}
