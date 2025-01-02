export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface Image {
    url: string;
    alt: string;
    width: number;
    height: number;
  }
  
  export interface PageContent {
    title: string;
    subtitle: string;
    content: string;
    images: Image[];
    faqs: FAQ[];
  }

  export interface TargetGroup {
    title: string;
    strength: string;
    focus: string;
  }