import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents-user',
  templateUrl: './documents-user.component.html',
  styleUrls: ['./documents-user.component.css']
})
export class DocumentsUserComponent {

  constructor(private router: Router){}

  navigateToVerifyUuid():void{
    this.router.navigate(['/verifyUuid'])
  }


}
