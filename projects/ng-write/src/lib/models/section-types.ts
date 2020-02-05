export interface Code {
  language: string;
  code: string;
  caption?: string;
}

export interface Html {
  text: string;
}

export interface Text {
  text: string;
}

export interface Table {
  rows: { cols: string[]; }[];
  caption?: string;
}

export interface Image {
  imageUrl?: string;
  textwidth?: number;
  caption?: string;
}
