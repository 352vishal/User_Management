import { Component, OnInit } from '@angular/core';
import { data } from '../../data-type';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  // user list property to get data
  usersList: undefined | data[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
  this.list();
  }

  // deleteData function using in Data Service
  deleteData(id: number) {
    this.data.deleteData(id).subscribe((result) => {
      if (result) {
        this.list();
      }
    });
  }

  list(){
     this.data.usersList().subscribe((result) => {
      if (result) {
        this.usersList = result
      }
    })
  }
}
