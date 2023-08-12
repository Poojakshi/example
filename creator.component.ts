import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent {
  createForm!: FormGroup;
  title:string='';
  author:string='';
  description:string='';
  content:string='';
  tags:string='';

  predefinedTags:string[]=['Technology','Food','Travel'];
  
  // constructor(private formBuilder: FormBuilder,private _service: TestServiceService){}

   onSubmit(){
  //   const newBlog={
  //     title:this.title,
  //     description:this.description,
  //     content:this.content,
  //     tags:this.tags
  //   };

   
   }
}
