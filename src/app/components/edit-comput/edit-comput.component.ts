import { Component, OnInit } from '@angular/core';
import { Comput } from 'src/app/models/comput';
import { ComputService } from 'src/app/services/comput.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-comput',
  templateUrl: './edit-comput.component.html',
  styleUrls: ['./edit-comput.component.css']
})
export class EditComputComponent implements OnInit {
  marques: string[];
  types: string[];
  comput: Comput;
  computId: number;
  isLoading: boolean;
  constructor(private computService: ComputService, private route: ActivatedRoute, private router: Router) {
    this.marques = ["Dell", "HP", "Apple", "Asus"];
    this.types = ["Portable", "Fixe", "Tablette hybride"];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.computId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.computService.getComputById(this.computId).subscribe((data: Comput) => {this.comput = data, this.isLoading = false})
  }

  computEdit(){
    this.computService.computEdit(this.comput).subscribe(then => {this.router.navigate(['/dashboard'])});
  }
}
