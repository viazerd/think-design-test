import { Component,OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  emailForm: FormGroup;
  showLoader: Boolean;
  showGif: Boolean;
  showEnd: Boolean;
  constructor(private formBuilder: FormBuilder, private loaderService: NgxUiLoaderService){}

  ngOnInit(){
    this.formInitialise();
  }


  formInitialise(){
    this.emailForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      subject:['',Validators.required],
      message:['',Validators.required]
    })
  }

  resetForm(){
    this.emailForm.reset();
    this.showLoader = false;
    this.showGif= false;
    this.showEnd= false;
  }

  submitForm(){
    console.log(this.emailForm.value);
    this.showLoader = true;
    this.loaderService.startLoader('loader-01');
    setTimeout(() => {
      this.loaderService.stopLoader('loader-01');// stop foreground spinner of the loader "loader-01" with 'default' taskId
      this.showGif = true;
    }, 5000);
    setTimeout(()=>{
      this.showEnd = true;
      this.showGif = false;
      this.resetForm();
    },10000)
  }


}
