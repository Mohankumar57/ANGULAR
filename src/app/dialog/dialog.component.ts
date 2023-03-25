import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

 freshnessList = [" Brand New ", " Second handed ", " Refurbished "]
 ProductForm ! : FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.ProductForm = this.formbuilder.group({ 
      productName : ['',Validators.required],
      category : ['',Validators.required],
      freshness : ['',Validators.required],
      Price : ['',Validators.required],
      Comment : ['',Validators.required],
      Date : ['',Validators.required],
    })
   
  }
  addProduct(){
    console.log(this.ProductForm.value);
  }

}
