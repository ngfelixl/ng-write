import { Section } from './section';

export interface Documentation {
  title: string;
  sections: Section[];
}

export interface DocumentationArray {
  documentations: Documentation[];
}
