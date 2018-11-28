export interface SyntaxConfig {
  lang: string;
  keywords: { [key: string]: string };
  strings: string;
  comments?: string;
  tags?: string[];
  decorators?: string;
}
