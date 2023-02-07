import { Component } from '@angular/core';
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
  blockedsArray: any
  alertsArray: any
  proceedsArray: any

  constructor(private analyseService: AnalysysService){}

  ngOnInit(){
    this.rulesUser = this.analyseService.findRule()
    this.blockeds = this.rulesUser.blocked
    this.alerts = this.rulesUser.alerts
    this.proceeds = this.rulesUser.proceed
    let blockedsArray = []
    let alertsArray = []
    let proceedsArray = []

    for(let i=0;i<this.analyseService.findRule().blocked.length;i++){
      blockedsArray.push(this.analyseService.findRule().blocked[i].variables)
    }
    for(let i=0;i<this.analyseService.findRule().alerts.length;i++){
      alertsArray.push(this.analyseService.findRule().alerts[i].variables)
    }
    for(let i=0;i<this.analyseService.findRule().proceed.length;i++){
      proceedsArray.push(this.analyseService.findRule().proceed[i].variables)
    }

    for(let i=0; i < blockedsArray.length;i++){
      for(let j = 0; j< blockedsArray[i].length; j++){
        blockedsArray.push(blockedsArray[i][j])
      }
    }
    for(let i=0; i < alertsArray.length;i++){
      for(let j = 0; j< alertsArray[i].length; j++){
        alertsArray.push(alertsArray[i][j])
      }
    }
    for(let i=0; i < proceedsArray.length;i++){
      for(let j = 0; j< proceedsArray[i].length; j++){
        proceedsArray.push(proceedsArray[i][j])
      }
    }

    this.blockedsArray = blockedsArray
    this.alertsArray = alertsArray
    this.proceedsArray = proceedsArray
  }
  
}
