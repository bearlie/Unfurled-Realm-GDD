export type SectionType = 
  | 'siege-transition'
  | 'siege-expeditions'
  | 'siege-economy'
  | 'siege-conquest'
  | 'siege-education'
  | 'siege-architecture';

export interface WordData {
  word: string;
  strokes: number;
  type: string;
}

export interface PlaceLink {
  direction: '上' | '下' | '左' | '右' | '出' | '入';
  target: string;
}

export interface PlaceData {
  name: string;
  links: PlaceLink[];
}
