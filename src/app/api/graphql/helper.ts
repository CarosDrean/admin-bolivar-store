import { DataQuery } from './query';
import { SpecificTypes } from './specific-types.enum';

export class Helpers {

  queryBuilder(dataQuery: DataQuery) {
    const query = {
      query: `
        ${dataQuery.type} {
          ${dataQuery.operation} ${this.queryOptions(dataQuery.specificType, dataQuery.data, dataQuery.parametro, dataQuery.campo)} {
            ${dataQuery.fields.join(',')}
          }
        }
      `,
      variables: ''
    };
    console.log('query: ' + query.query);
    return query;
  }

  private deleteCampo(campo: string, data: any) {
    const newData = Object.keys(data).reduce((object, key) => {
      if (key !== campo) { object[key] = data[key]; }
      return object;
    }, {});
    return newData;
  }

  private queryOptions(specificType: string, data: any = {}, parametro = '', campo: string) {
    if (specificType === SpecificTypes.GET_ID || specificType === SpecificTypes.DELETED) {
      return `(_id: "${parametro}")`;
    } else if (specificType === SpecificTypes.GET_ALL_PARAM) {
      return `(${campo}: "${parametro}")`;
    } else if (specificType === SpecificTypes.UPDATED) {
      const newData = this.deleteCampo('_id', data);
      return `(_id: "${parametro}", input: {
        ${this.inputBuilder(newData)}
      })`;
    } else if (specificType === SpecificTypes.CREATED) {
      return `(input: {
        ${this.inputBuilder(data)}
      })`;
    } else {
      return '';
    }
  }

  private inputBuilder(data: {}) {
    let result = '';
    new Map(Object.entries(data)).forEach((value, key) => {
      result += `${key}: ${this.getType(value)}, \n`;
    });
    return result;
  }

  private getType(data) {
    if (typeof data === 'string') {
      return `"${data}"`;
    }
    return data;
  }

}
