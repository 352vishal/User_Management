import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { data } from '../../data-type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  userData: undefined | data
  userMessage: undefined | string;
  
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    let datatId = this.route.snapshot.paramMap.get('id');
    console.warn(datatId);
    datatId &&
      this.data.getData(datatId).subscribe((data) => {
        console.warn(data);
        this.userData = data;
      });
  }

  submit(data: any) {

    if (this.userData) {
      data.id = this.userData.id;
    }
    this.data.updateData(data).subscribe((result) => {
      if (result) {
        this.userMessage = "Product has updated"
      }
    })
    setTimeout(() => {
      this.userMessage = undefined;
    }, 3000)
  }
}
