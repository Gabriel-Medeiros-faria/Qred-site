import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  codigo: string = '';

  constructor(private router: Router, private home: HomeService){}

  ngOnInit():void{
  }

  findDocument():void{
      if(this.home.find(this.codigo)){
        this.home.showMessage("Operação executada com sucesso!!")
        this.router.navigate(['/documents'])
      }
      else{
        this.home.showMessage("Código errado!")
      }
    
  }
}
