import { VerifyUuidService } from '../../../components/verify-uuid/verify-uuid.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { rulesModel } from './rules-model';

@Component({
  selector: 'app-rules-user',
  templateUrl: './rules-user.component.html',
  styleUrls: ['./rules-user.component.css']
})
export class RulesUserComponent {

  @Input() rulesPage!: rulesModel

  constructor(private activatedRoute: ActivatedRoute,
    private verifyUuid: VerifyUuidService){}

  ngOnInit(){
    let id = this.activatedRoute.snapshot.paramMap.get("rules")
    console.log(id)
    console.log(this.rulesPage)
  }

  findRule(){
    
  }
}
