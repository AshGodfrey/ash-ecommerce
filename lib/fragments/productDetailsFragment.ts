export const productDetailsFragment = `
  fragment ProductDetails on Product {
    description
    featuredImage {
      altText
      height
      id
      url
      width
    }
    id
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    tags
    title
  }
`;
