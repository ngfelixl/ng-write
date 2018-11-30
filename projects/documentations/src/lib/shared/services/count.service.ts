import { Injectable } from '@angular/core';

@Injectable()
export class CountService {
  tableOfContents: string[] = [];
  tableOfFigures: string[] = [];
  tableOfListings: string[] = [];
  tableOfTables: string[] = [];

  reset(): void {
    this.tableOfFigures = [];
    this.tableOfListings = [];
    this.tableOfTables = [];
  }

  figure(title: string): number {
    this.tableOfFigures.push(title);
    return this.tableOfFigures.length;
  }

  listing(title: string): number {
    this.tableOfListings.push(title);
    return this.tableOfListings.length;
  }

  table(title: string): number {
    this.tableOfTables.push(title);
    return this.tableOfTables.length;
  }
}
