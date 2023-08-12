import { Component } from '@angular/core';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrls: ['./visitor-profile.component.css']
})
export class VisitorProfileComponent {
  user:any;
  editing:boolean=false;
}
