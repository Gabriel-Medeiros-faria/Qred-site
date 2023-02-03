import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from'@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { VerifyUuid } from './verifyUuid-model';

@Injectable({
  providedIn: 'root'
})
export class VerifyUuidService {

  baseUrl = "http://localhost:1234/analises"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string):void{
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  find(): Observable<VerifyUuid[]>{
    return this.http.get<VerifyUuid[]>(this.baseUrl)
  }
}
