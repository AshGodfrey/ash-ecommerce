import { productDetailsFragment } from '../fragments/productDetailsFragment';

export const productQuery = `
${productDetailsFragment}
query SingleProductQuery($id: ID!) {
    product(id: $id) {
        ...ProductDetails
  }
}
`;

export const productsQuery = `
  ${productDetailsFragment}
  query ProductsQuery($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      nodes {
        ...ProductDetails
        handle
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const recentProductsQuery = `
  ${productDetailsFragment}
  query ProductsQuery($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      nodes {
        ...ProductDetails
        handle
      }
    }
  }
`;
