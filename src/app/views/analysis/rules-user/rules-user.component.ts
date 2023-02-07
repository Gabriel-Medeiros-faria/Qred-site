import { Component, Input } from '@angular/core';
import { AnalysysService } from '../analysys.service';

@Component({
  selector: 'app-rules-user',
  templateUrl: './rules-user.component.html',
  styleUrls: ['./rules-user.component.css']
})
export class RulesUserComponent {

  rulesUser: any

  constructor(private analyseService: AnalysysService){}

  ngOnInit(){
    this.rulesUser = this.analyseService.findRule()
    console.log(this.rulesUser)
  }
  
}
