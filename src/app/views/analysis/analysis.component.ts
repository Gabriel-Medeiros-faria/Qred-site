import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VerifyUuidService } from 'src/app/components/verify-uuid/verify-uuid.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  documentArray!: Document[];  
  document!: Document;

  constructor(private router: Router, 
    private verifyUuidService: VerifyUuidService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log("id analysis =>", id)
  }
}
