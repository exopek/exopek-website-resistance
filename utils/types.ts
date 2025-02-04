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
    slug: string;
    h1: string;
    intoduction: string;
    conclusion: string;
    metaDescription: string;
    metaTitle: string;
    productSchemaDescription: string;
    productSchemaName: string;
    productSchemaPrice: string;
    productSchemaBrand: string;
    mainContent: Content[];
    faqContent: FAQ[];
    createdAt: string;
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
    h2_title: string;
    content: string;
  }