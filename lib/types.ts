interface FeaturedImage {
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

interface Product {
  description: string;
  featuredImage: FeaturedImage;
  id: string;
  priceRangeV2: {
    minVariantPrice: MinVariantPrice;
  };
  tags: string[];
  title: string;
}

interface CollectionNode {
  title: string;
  handle: string;
}

interface GraphQLResponse {
  data?: {
    product?: Product;
    products?: {
      nodes: Product[];
    };
    collections?: {
      edges: {
        node: CollectionNode;
      }[];
    };
    collectionByHandle?: {
      title: string;
      products: {
        edges: {
          node: Product;
        }[];
      };
    };
  };
  errors?: { message: string }[];
}
