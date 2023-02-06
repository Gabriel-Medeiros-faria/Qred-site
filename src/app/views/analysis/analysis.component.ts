import { rulesModel } from '../rules/rules-user/rules-model';
import { AnalysisModel } from './analysis-model';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';
import { DocumentUser } from '../documents-user/document-model'

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
[x: string]: any;

  documentRight!: DocumentUser; 
  analysis!: AnalysisModel[]; 
  rules!: rulesModel

  constructor(private verifyUuidService: VerifyUuidService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    const documentFind = this.verifyUuidService.find().documents
    for(let i = 0;i < documentFind.length;i++){
      if(documentFind[i].document === id){
        this.documentRight = documentFind[i]
        this.analysis = documentFind[i].analysis
      }
    }    
  }

  findAnalyse(Analyserules: any){
    console.log(Analyserules)
    this.rules = Analyserules
    this.router.navigate([`/rules/1`]);
  }
}
