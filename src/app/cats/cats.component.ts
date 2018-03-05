import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit {
  cats: Cat[];
  
  constructor(private catService: CatService) { }
  
  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe(cat => this.cats = cat);
  }

  delete(cat: Cat): void {
    this.cats = this.cats.filter(c => c !== cat);
    this.catService.deleteCat(cat).subscribe();
  }
}
