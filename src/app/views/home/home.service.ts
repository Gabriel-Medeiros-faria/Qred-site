import { Injectable } from '@angular/core';
import grouped_analysis from '../../../../grouped_analysis.json'
import {MatSnackBar} from'@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  objJson: any

  constructor(private snackBar: MatSnackBar) { }

  find(codigo: string): any{
    for(let i =0; i < grouped_analysis.analises.length ;i++){
      if(grouped_analysis.analises[i].uuid === codigo){
        this.objJson = grouped_analysis.analises[i]
        return grouped_analysis.analises[i]
      }
    }
  }

  findJson(){
    return this.objJson
  }

  showMessage(msg: string):void{
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
