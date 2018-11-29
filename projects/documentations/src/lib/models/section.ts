import { Code, Text, Table } from './section-types';
import { DocumentationArray } from './documentation';

export interface Section {
  type: string;
  content?:
    Text |
    Code |
    DocumentationArray |
    Table;
}
