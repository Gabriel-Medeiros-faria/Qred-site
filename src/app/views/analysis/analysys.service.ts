import {  Router } from '@angular/router';
import { Injectable } from '@angular/core';


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
