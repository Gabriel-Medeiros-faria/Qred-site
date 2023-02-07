import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';
import { Injectable } from '@angular/core';
import { DocumentUser } from 'Qred-site/src/app/views/documents-user/document-model';
import { AnalysisModel } from 'Qred-site/src/app/views/analysis/analysis-model';

@Injectable({
  providedIn: 'root'
})
export class AnalysysService {

  rules: any

  constructor(private router: Router){
  }

  findAnalyse(Analyserules: any){
    this.rules = Analyserules
    this.router.navigate([`/rulesUser`]);
  }

  findRule(){
    return this.rules
  }
}
