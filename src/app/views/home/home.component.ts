import { Component } from '@angular/core';
import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  codigo: string = '';

  constructor(private verifyUuidService: VerifyUuidService,
    private router: Router){}

  ngOnInit():void{
  }

  findDocument():void{
      if(this.verifyUuidService.find().uuid === this.codigo){
        this.verifyUuidService.showMessage("Operação executada com sucesso!!")
        this.router.navigate(['/documents'])
      }
      else{
        this.verifyUuidService.showMessage("Código errado!")
      }
    
  }
}
