import { Component, OnInit } from '@angular/core';
import { Comput } from 'src/app/models/comput';
import { ComputService } from 'src/app/services/comput.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comput-detail',
  templateUrl: './comput-detail.component.html',
  styleUrls: ['./comput-detail.component.css']
})
export class ComputDetailComponent implements OnInit {
computId: number;
comput: Comput;
isLoading: boolean;
  constructor(private computService: ComputService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computId = +(this.route.snapshot.paramMap.get('id'));
    this.computService.getComputById(this.computId).subscribe((data: Comput) => {this.comput = data, this.isLoading = false});
  }

}
