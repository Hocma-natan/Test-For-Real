import { Component, OnInit } from '@angular/core';
import { Comput } from 'src/app/models/comput';
import { ComputService } from 'src/app/services/comput.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-comput',
  templateUrl: './add-comput.component.html',
  styleUrls: ['./add-comput.component.css']
})
export class AddComputComponent implements OnInit {
  marques: string[];
  types: string[];
  comput: Comput;
  constructor(private computService: ComputService, private router: Router) {
    this.marques = ["Dell", "HP", "Apple", "Asus"];
    this.types = ["Portable", "Fixe", "Tablette hybride"];
  }

  ngOnInit(): void {
    this.comput = new Comput;
  }
  computAdding(){
    this.computService.addComput(this.comput).subscribe(then => {this.router.navigate(['/dashboard'])})
  }
}
