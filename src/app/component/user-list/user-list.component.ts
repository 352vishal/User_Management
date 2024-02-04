import { Component, OnInit } from '@angular/core';
import { data } from '../../data-type';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  usersList: undefined | data[];
  userMessage: undefined | string;

  
  constructor(private data: DataService) { }

  ngOnInit(): void {
  this.list();
  }

  deleteData(id: number) {
    this.data.deleteData(id).subscribe((result) => {
      if (result) {
        this.userMessage = 'Data is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.userMessage = undefined;
    }, 3000);
  }

  list(){
     this.data.usersList().subscribe((result) => {
      if (result) {
        this.usersList = result
      }
    })
  }
}
