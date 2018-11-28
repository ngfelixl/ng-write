import { Code, Text, Table } from './section-types';
import { DocumentationArray } from './Documentation';

export interface Section {
  type: string;
  content:
    Text |
    Code |
    DocumentationArray |
    Table;
}
