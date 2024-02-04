import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrl: './user-upsert.component.css'
})
export class UserUpsertComponent {

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

// new code

   // to-do list mini project just for prectice
   list: any[] = [];
   listItems(list: string) {
     this.list.push({ id: this.list.length, name: list })
     console.warn(this.list)
   }
 
   removeItem(id: number){
     console.warn(id)
     this.list=this.list.filter(item=>item.id!==id)
   }

}
