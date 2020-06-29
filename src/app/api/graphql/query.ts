export interface DataQuery {
  type: string;
  operation: string;
  fields: string[];
  parametro?: string;
  specificType: string;
  data?: {};
  campo?: string;
}
