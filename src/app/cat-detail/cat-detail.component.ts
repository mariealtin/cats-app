import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catService: CatService
  ) { }
  

  ngOnInit() {
    this.getCat();
  }

  getCat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.catService.getCat(id)
      .subscribe(cat => this.cat = cat);
  }

  save(): void {
    if (!this.cat.name || !this.cat.color) { return; }
    this.catService.updateCat(this.cat)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
