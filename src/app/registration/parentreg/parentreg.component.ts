import { Component, OnInit } from '@angular/core';
import { Studentbranch } from './studentbranch';

@Component({
  selector: 'app-parentreg',
  templateUrl: './parentreg.component.html',
  styleUrls: ['./parentreg.component.css']
})
export class ParentregComponent implements OnInit {
 
  studentbranch: Studentbranch[]= [
    {id: 1,branch: 'Choose..'},
    {id: 2,branch: 'CIVIL'},
    {id: 2,branch: 'EEE'},
    {id: 2,branch: 'MECHANICAL'},
    {id: 2,branch: 'ECE'},
    {id: 2,branch: 'CE'},
    {id: 3,branch: 'M.B.A'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
