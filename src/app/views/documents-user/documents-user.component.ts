import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from './document-model';


@Component({
  selector: 'app-documents-user',
  templateUrl: './documents-user.component.html',
  styleUrls: ['./documents-user.component.css'],
})
export class DocumentsUserComponent {  
  documentArray!: Document[];  

  constructor(private router: Router, private verifyUuidService: VerifyUuidService) {}

  navigateToVerifyUuid(): void {
    this.router.navigate(['/verifyUuid']);
  }

  ngOnInit() {
    this.verifyUuidService.find().subscribe((resp)=>{
      this.documentArray = resp[0].documents
      console.log(this.documentArray)
    })
  }

  findDocument(id: string){
    const newdocument = this.documentArray.find(item=> item.document === id)
    console.log(newdocument)
    this.router.navigate([`/analysis/${id}`]);
  }

}
