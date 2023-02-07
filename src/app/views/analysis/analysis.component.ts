import { AnalysisModel } from './analysis-model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentUser } from '../documents-user/document-model'
import { AnalysysService } from './analysys.service';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
[x: string]: any;

  documentRight!: DocumentUser; 
  analysis!: AnalysisModel[]; 
  rules: any
  

  constructor(
    private activatedRoute: ActivatedRoute, 
    private analyseService: AnalysysService,
    private home: HomeService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    const documentFind = this.home.findJson().documents
    for(let i = 0;i < documentFind.length;i++){
      if(documentFind[i].document === id){
        this.documentRight = documentFind[i]
        this.analysis = documentFind[i].analysis
      }
    }
  }

  findAnalyse(Analyserules: any){
    this.analyseService.findAnalyse(Analyserules)
  }
}
