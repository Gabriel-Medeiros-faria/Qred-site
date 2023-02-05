import { VerifyUuidService } from './../../components/verify-uuid/verify-uuid.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rules-user',
  templateUrl: './rules-user.component.html',
  styleUrls: ['./rules-user.component.css']
})
export class RulesUserComponent {

  constructor(private activatedRoute: ActivatedRoute,
    private verifyUuid: VerifyUuidService){}

  ngOnInit(){
    let id = this.activatedRoute.snapshot.paramMap.get("rules")
    let documentFind = this.verifyUuid.find().documents[0].analysis[0].rules.blocked
    for(let i = 0;i < documentFind.length;i++){

    }
    console.log(id)
  }

  findRule(){
    
  }
}
