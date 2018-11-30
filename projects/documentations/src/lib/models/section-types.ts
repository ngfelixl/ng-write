export interface Code {
  language: string;
  code: string;
}

export interface Text {
  text: string;
}

export interface Table {
  rows: { cols: string[]; }[];
}

export interface Image {
  imageUrl?: string;
  textwidth: number;
  caption: string;
}
