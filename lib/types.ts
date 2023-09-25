export interface FeaturedImage {
  altText: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

interface MinVariantPrice {
  amount: number;
  currencyCode: string;
}

export interface Product {
  description: string;
  featuredImage: FeaturedImage;
  id: string;
  priceRangeV2: {
    minVariantPrice: MinVariantPrice;
  };
  tags: string[];
  title: string;
}

export interface CollectionNode {
  title: string;
  handle: string;
}

export interface CollectionResponse {
  data?: {
    collectionByHandle: {
      title: string;
      products: {
        edges: {
          node: Product;
        }[];
      };
    };
  };
  errors?: Array<{ message: string }>;
}

export interface CollectionsResponse {
  data?: {
    collections: {
      edges: {
        node: CollectionNode;
      }[];
    };
  };
  errors?: Array<{ message: string }>;
}

export interface ProductResponse {
  data?: {
    product: Product;
  };
  errors?: Array<{ message: string }>;
}

export interface ProductsResponse {
  data?: {
    products: {
      nodes: Product[];
    };
  };
  errors?: Array<{ message: string }>;
}

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{ message: string }>;
}
