import { Component, Input } from '@angular/core';
import { AnalysysService } from '../analysys.service';

@Component({
  selector: 'app-rules-user',
  templateUrl: './rules-user.component.html',
  styleUrls: ['./rules-user.component.css']
})
export class RulesUserComponent {

  rulesUser: any
  blockeds: any
  alerts: any
  proceeds: any

  constructor(private analyseService: AnalysysService){}

  ngOnInit(){
    this.rulesUser = this.analyseService.findRule()
    this.blockeds = this.rulesUser.blocked
    this.alerts = this.rulesUser.alerts
    this.proceeds = this.rulesUser.proceed
    console.log(this.analyseService.findRule().blocked.variables)
  }
  
}
