import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('formElement') signupform:NgForm;
  submitted=false;
answer:string;
  defaultQuestion="pet";
  genders=['male','female']

  user={
    name:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
   // this.signupform.setValue({
     // userData:{
       // username:suggestedName,
        //email:''
      //},
      //secret:'pet',
      //questionAnswer:'',
      //gender:'male'
 //   });
 this.signupform.form.patchValue({
   userData:{
     username:suggestedName
   },
   gender:'male'
 });
  }

  //onSubmit(form:NgForm){
    //console.log(form);
  //}

  onSubmit(){
    console.log(this.signupform);
    this.submitted=true;
    this.user.name=this.signupform.value.userData.username;
    this.user.email=this.signupform.value.userData.email;
    this.user.secretQuestion=this.signupform.value.secret;
    this.user.answer=this.signupform.value.questionAnswer;
    this.user.gender=this.signupform.value.gender;
    console.log(this.user.name);
    console.log(this.user.gender);
    this.signupform.reset();
  }
}
