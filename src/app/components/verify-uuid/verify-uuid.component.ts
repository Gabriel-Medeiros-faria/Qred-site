import { Component, OnInit } from '@angular/core';
import { VerifyUuidService } from './verify-uuid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-uuid',
  templateUrl: './verify-uuid.component.html',
  styleUrls: ['./verify-uuid.component.css']
})
export class VerifyUuidComponent {
    constructor(private verifyUuidService: VerifyUuidService,
      private router: Router){}

    ngOnInit():void{
    }

    createProduct():void{
      this.verifyUuidService.showMessage("Operação executada com sucesso!!")
    }
    cancel():void{
      this.router.navigate(['/documents'])
    }
}
