import { Injectable } from '@angular/core';
import { Section } from '../../models';
// import { Text } from '../../models/section-types';
import { Config } from '../../models/config';

@Injectable()
export class TableOfContentsService {
  tableOfContents: string[];

  create(config: Config, sections: Section[]): string[] {
    if (config && config.tableOfContents && config.tableOfContents.show) {
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].type === 'title') {
          sections[i].content = { text: `${i + 1} ${sections[i].content}` };
          this.tableOfContents.push(`${i + 1} ${sections[i].content}`);
        }
      }
      return this.tableOfContents;
    }
  }
}
