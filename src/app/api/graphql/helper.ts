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

  private inputBuilder(data: {}): any {
    console.log(data);
    let result = '';
    let corch = false;
    let count = 0;
    new Map(Object.entries(data)).forEach((value, key) => {
      if (typeof value === 'object') {
        corch = false;
        let resultin = '';
        new Map(Object.entries(value)).forEach((val, ke) => {
          if (typeof val === 'object') {
            // esto solo ejecutar una vez
            let resultina = '';
            if (count === 0) {
              new Map(Object.entries(value)).forEach((values, keys) => {
                if (typeof values === 'object') {
                  corch = true;
                  let res = '';
                  new Map(Object.entries(values)).forEach((v, k) => {
                    res += `${k}: ${this.getType(v)}, \n`;
                  });
                  console.log(res);
                  resultina += `{${res}}, \n`;
                } else {
                  resultina += `${keys}: ${this.getType(values)}, \n`;
                }
              });
            }
            count++;
            resultin += `${resultina}, \n`;
          } else {
            resultin += `${ke}: ${this.getType(val)}, \n`;
          }
        });
        if (corch) {
          result += `${key}: [${resultin}], \n`;
        } else {
          result += `${key}: {${resultin}}, \n`;
        }
      } else {
        result += `${key}: ${this.getType(value)}, \n`;
      }
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
