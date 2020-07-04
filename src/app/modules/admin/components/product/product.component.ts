import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Componente } from 'src/app/api/component';
import { ProductAction } from 'src/app/store/product/product.action';
import { ProductSelector } from 'src/app/store/product/product.selector';
import { Product } from 'src/app/interfaces/product';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CategoryAction } from 'src/app/store/category/category.action';
import { CategorySelector } from 'src/app/store/category/category.selector';
import { Category } from 'src/app/interfaces/category';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, filter } from 'rxjs/operators';
import { SEARCH } from '../../../../store/search/search.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends Componente implements OnInit {

  private static action = new ProductAction();
  private selector = new ProductSelector();
  private actionCategory = new CategoryAction();
  private selectorCategory = new CategorySelector();
  item: Product;
  items: Observable<any[]>;
  categorys: Observable<Category[]>;

  img: Observable<string>;
  percent: Observable<number>;
  data: Product[];

  path: string;
  filter = 'all';
  temp = [];
  aux = [];

  constructor(private stor: Store<any>, private storage: AngularFireStorage) {
    super(ProductComponent.action, stor);
    this.items = this.stor.pipe(select(this.selector.selectAllEntities));
    stor.select(SEARCH).subscribe(text => {
      console.log(text);
      this.search(text);
    });
    this.items.subscribe((data => {
      this.temp = data;
      this.aux = data;
      this.filter = 'all';
    }));
    this.categorys = stor.pipe(select(this.selectorCategory.selectAllEntities));
  }

  @ViewChild('imageUser') inputImageUser: ElementRef;

  ngOnInit(): void {
    this.getItems();
    this.getCategorys();
  }

  private getCategorys() {
    this.stor.dispatch(this.actionCategory.itemsE());
  }

  search(val: string) {
    this.temp = this.aux;
    if (val !== 'all') {
      this.temp = this.temp.filter(data => data.name.toLowerCase().indexOf(val) !== -1 || !val);
    }
  }

  updateViewProducts() {
    const val = this.filter;
    this.temp = this.aux;

    if (val !== 'all') {
      this.temp = this.temp.filter(data => data.category._id === val);
    }
  }

  reload() {
    this.percent = of(0);
    this.img = of('');
  }

  selectImg(event) {
    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const path = `imgs/product_${id}_${file.name}`;
    this.item.imgRef = path;

    this.uploadImg(path, file);
  }

  uploadImg(path, file) {
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    this.percent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.img = ref.getDownloadURL().pipe(
          finalize(() => {
            this.item.imgUrl = this.inputImageUser.nativeElement.value;
            console.log(this.img);
          })
        );
      })
    ).subscribe();
  }

  deleteImg(path: string) {
    const ref = this.storage.ref(path);
    ref.delete();
  }

  edit(item: any) {
    this.case = 'Editar';
    this.editb = true;
    this.item = Object.assign({}, item);
    if (item.category) {
      this.item.category = item.category._id;
    }

    this.img = of(item.imgUrl);
    console.log(this.img);
  }

  deleteItem() {
    this.deleteImg(this.path);
    const id = this.idDelete;
    this.stor.dispatch(ProductComponent.action.deleteA({ id }));
  }

  getKeyForDelete(id: string, ref: string) {
    this.path = ref;
    this.idDelete = id;
  }

  resetItem() {
    this.item = {
      name: '',
      price: 0,
      description: '',
      state: '',
      category: '',
      visit: 0,
      sale: 0,
      imgUrl: '',
      imgRef: ''
    };
    this.img = of('');
  }

}
