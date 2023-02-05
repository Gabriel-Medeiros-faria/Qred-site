import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentUser } from './document-model';


@Component({
  selector: 'app-documents-user',
  templateUrl: './documents-user.component.html',
  styleUrls: ['./documents-user.component.css'],
})
export class DocumentsUserComponent {  
  documentArray!: DocumentUser[];  
  pointsUser!: number; 

  constructor(private router: Router, private verifyUuidService: VerifyUuidService) {}

  navigateToVerifyUuid(): void {
    this.router.navigate(['/verifyUuid']);
  }

  ngOnInit() {
    const resp = this.verifyUuidService.find()
      this.documentArray = resp.documents
      this.pointsUser = resp.totalPoints
      console.log(this.documentArray)
  }

  findDocument(id: string){
    const newdocument = this.documentArray.find(item=> item.document === id)
    console.log(newdocument)
    this.router.navigate([`/analysis/${id}`]);
  }

}
