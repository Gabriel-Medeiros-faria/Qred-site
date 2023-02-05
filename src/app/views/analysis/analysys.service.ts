import { ActivatedRoute } from '@angular/router';
import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';
import { Injectable } from '@angular/core';
import { DocumentUser } from '../documents-user/document-model'


@Injectable({
  providedIn: 'root'
})
export class AnalysysService {

  constructor(private verifyUuidService: VerifyUuidService,
    private activatedRoute: ActivatedRoute  ) { }
}
