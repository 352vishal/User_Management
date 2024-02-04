import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { DataService } from '../../service/data.service';
import { data } from '../../data-type';


@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrl: './user-upsert.component.css'
})
export class UserUpsertComponent implements OnInit{
  addUserMessage: string | undefined;

  // control all form 
  userData= new FormGroup({

  // control form fileds
  first:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  last:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  address:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  contact:new FormControl('',[Validators.required,Validators.minLength(10)]),
  
  
  })
  
  getValue(){
  
    console.warn(this.userData.value)
  }
  
  get first(){
  return this.userData.get('first')
  }
  get last(){
    return this.userData.get('last')
  }
  get address(){
    return this.userData.get('address')
  }
  get email(){
    return this.userData.get('email')
  }
  get contact(){
    return this.userData.get('contact')
  }
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  submit(data: data) {
    this.data.addData(data).subscribe((result) => {
      console.warn(result)
      if (result) {
        this.addUserMessage = 'Your Data is added successfully';
      }
    });

    setTimeout(() => {
      this.addUserMessage = undefined
    }, 3000);

  }
}
