export interface DatoEvent {
  slug: string;
  title: string;
  description: string;
  date: string;
  audience?: string;
  tickets?: string;
  image?: {
    url: string;
    alt?: string;
    width: number;
    height: number;
  };
}

export interface DatoExhibit {
  title: string;
  slug: string;
  description: string;
  london: boolean;
  leeds: boolean;
  taskEasy: string;
  taskIntermediate: string;
  taskAdvanced: string;
  history: string;
  people: string;
  applications: string;
  mathsAtHome: string;
  images: Array<{
    url: string;
    alt?: string;
    width: number;
    height: number;
  }>;
}
