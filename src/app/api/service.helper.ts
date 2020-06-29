import { HttpClient } from '@angular/common/http';
import { Functions } from './graphql/functions';
import { map } from 'rxjs/operators';
import { DataQuery } from './graphql/query';
import { Helpers } from './graphql/helper';
import { SpecificTypes } from './graphql/specific-types.enum';

export abstract class Service {

  items: any;
  item: any;
  private helper: Helpers;

  constructor(private http: HttpClient, readonly URL_API: string, private functions: Functions) {
    this.helper = new Helpers();
  }

  getItems(fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ALL,
      operation: this.functions.GET_ALL,
      fields
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items)
    );
  }

  getItemsExcep(fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ALL_EXECP,
      operation: this.functions.GET_ALL_EXECP,
      fields
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items)
    );
  }

  getItemsParam(campo: string, parametro: string, fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ALL_PARAM,
      operation: this.functions.GET_ALL_PARAM,
      fields,
      parametro,
      campo
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((items: any) => this.items = items)
    );
  }

  getItem(id: string, fields: string[]) {
    const query: DataQuery = {
      type: 'query',
      specificType: SpecificTypes.GET_ID,
      operation: this.functions.GET_ID,
      parametro: id,
      fields
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query)).pipe(
      map((item: any) => this.item = item.data )
    );
  }

  createItem(data: any, fields: string[]) {
    const query: DataQuery = {
      type: 'mutation',
      specificType: SpecificTypes.CREATED,
      operation: this.functions.CREATED,
      fields,
      data
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }

  updateItem(data: any, fields: string[]) {
    const query: DataQuery = {
      type: 'mutation',
      specificType: SpecificTypes.UPDATED,
      operation: this.functions.UPDATED,
      fields,
      parametro: data._id,
      data
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }

  deleteItem(id: string) {
    const query: DataQuery = {
      type: 'mutation',
      specificType: SpecificTypes.DELETED,
      operation: this.functions.DELETED,
      fields: ['_id'],
      parametro: id
    };
    return this.http.post(this.URL_API, this.helper.queryBuilder(query));
  }
}
