import { Component, Input, OnInit } from '@angular/core';
import { Documentation } from '../../models/documentation';
import { UpdateMetaService } from '../services/update-meta.service';
import { MetaData } from '../../models/meta-data';
import { Text } from '../../models/section-types';
import { Config } from '../../models/config';


@Component({
  selector: 'docu-article',
  template: `
    <article>
      <docu-section *ngFor="let section of documentation?.sections; trackBy: trackByIndex" [section]="section"></docu-section>
    </article>
  `
})
export class ArticleComponent implements OnInit {
  @Input() documentation: Documentation;
  @Input() updateMeta = false;
  @Input() config: Config;

  constructor(private updateMetaService: UpdateMetaService) {}

  ngOnInit() {
    if (this.updateMeta && this.documentation) {
      const firstParagraph = this.documentation.sections
        ? this.documentation.sections.find(o => o.type === 'text')
        : null;
      const meta: MetaData = {
        title: this.documentation.title,
        description: firstParagraph ? (<Text>firstParagraph.content).text : ''
      };
      this.updateMetaService.update(meta);
    }
  }

  trackByIndex(index: number) {
    return index;
  }
}
