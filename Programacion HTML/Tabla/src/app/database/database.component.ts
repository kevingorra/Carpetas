import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html'
})
export class DatabaseComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};

  dtTrigger= new Subject();
  data:any[]=[];

  constructor( private http:HttpClient) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    .subscribe((res:any) =>{
      this.data=res.data;
      this.dtTrigger;
      
    });
 
      
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  
}
