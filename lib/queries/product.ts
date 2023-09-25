import { productDetailsFragment } from "../fragments/productDetailsFragment";

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
  query ProductsQuery {
    products(first: 100) {
      nodes {
        ...ProductDetails
        handle
      }
    }
  }
`;

export const recentProductsQuery = `
  ${productDetailsFragment}
  query ProductsQuery {
    products(first: 3, sortKey: CREATED_AT, reverse: true) {
      nodes {
        ...ProductDetails
        handle
      }
    }
  }
`;
