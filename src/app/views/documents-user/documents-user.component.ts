import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentUser } from './document-model';
import { HomeService } from '../home/home.service';
HomeService

@Component({
  selector: 'app-documents-user',
  templateUrl: './documents-user.component.html',
  styleUrls: ['./documents-user.component.css'],
})
export class DocumentsUserComponent {  
  documentArray!: DocumentUser[];  
  pointsUser!: number; 

  constructor(private router: Router, 
    private home: HomeService) {}

  navigateToVerifyUuid(): void {
    this.router.navigate(['/verifyUuid']);
  }

  ngOnInit() {
    const resp = this.home.findJson()
      this.documentArray = resp.documents
      this.pointsUser = resp.totalPoints
  }

  findDocument(id: string){
    const newdocument = this.documentArray.find(item=> item.document === id)
    this.router.navigate([`/analysis/${id}`]);
  }

}
