import { Component, OnInit } from '@angular/core';
import { ComputService } from 'src/app/services/comput.service';
import { Comput } from 'src/app/models/comput';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  computs: Comput[];
  computId: number;
  renta: number;
  constructor(private computService: ComputService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.computService.getComput().subscribe((data: Comput[]) =>{this.computs = data, this.isLoading = false});
  }
  deleteComput(computId: number){
    this.isLoading = true;
    this.computService.deleteComput(computId).subscribe(then => {this.computService.getComput().subscribe((data: Comput[]) =>{this.computs = data, this.isLoading = false})})
  }
}
