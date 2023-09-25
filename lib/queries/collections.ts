import { productDetailsFragment } from "../fragments/productDetailsFragment";

export const getCollectionsQuery = `{
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }`;

export const getCollectionQuery = `
  ${productDetailsFragment}
  query CollectionByHandleQuery($handle: String!) {
    collectionByHandle(handle: $handle) {
      title
      products(first: 10) {
        edges {
          node {
            ...ProductDetails
          }
        }
      }
    }
  }
`;
