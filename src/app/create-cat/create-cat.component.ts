import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {
  @Input() cat: Cat;

  constructor(
    private location: Location,
    private catService: CatService) { }

  ngOnInit() {
  }

  save(name: string, color: string): void {
    name = name.trim();
    color = color.trim();
    if (!name || !color) { return; }
    this.catService.createCat({ name, color } as Cat)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
