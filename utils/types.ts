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
    mainContent: Content[];
    faqContent: FAQ[];
  }

  export interface TargetGroup {
    title: string;
    strength: string;
    focus: string;
  }

  export interface Product {
    title: string;
    description: string;
    price: number;
    image: Image;
  }

  export interface Content {
    title: string;
    content: string;
  }