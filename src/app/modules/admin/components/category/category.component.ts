import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/api/component';
import { CategoryAction } from 'src/app/store/category/category.action';
import { CategorySelector } from 'src/app/store/category/category.selector';
import { Category } from 'src/app/interfaces/category';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-category-carrera',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends Componente implements OnInit {

  private static action = new CategoryAction();
  private selector = new CategorySelector();
  item: Category;
  items: Observable<Category[]>;

  constructor(private stor: Store<any>) {
    super(CategoryComponent.action, stor);
    this.items = this.stor.pipe(select(this.selector.selectAllEntities));
  }

  ngOnInit(): void {
    this.getItems();
  }

  edit(item: Category) {
    this.case = 'Editar';
    this.editb = true;
    this.item = Object.assign({}, item);
  }

  resetItem() {
    this.item = {
      name: ''
    };
  }

}
