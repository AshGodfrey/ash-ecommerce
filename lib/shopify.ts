import {
  CollectionResponse,
  CollectionsResponse,
  ProductResponse,
  ProductsResponse,
  GraphQLResponse,
} from './types';
import {
  productQuery,
  productsQuery,
  recentProductsQuery,
} from './queries/product';
import { getCollectionsQuery, getCollectionQuery } from './queries/collections';

async function fetchGraphQL<T>(
  query: string,
  variables?: Object,
): Promise<GraphQLResponse<T>> {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.ADMIN_API_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Failed to fetch data Status: ${res.status} Response: ${text}`,
    );
  }

  return res.json();
}

export async function getProduct(id: string): Promise<ProductResponse> {
  return fetchGraphQL(productQuery, {
    id: `gid://shopify/Product/${id}`,
  });
}

export async function getProducts(query?: string): Promise<ProductsResponse> {
  return fetchGraphQL(productsQuery, { first: query ? 10 : 100, query });
}

export async function getRecentProducts(
  first: number,
): Promise<ProductsResponse> {
  return fetchGraphQL(recentProductsQuery, { first });
}

export async function fetchAllCollections(): Promise<CollectionsResponse> {
  return fetchGraphQL(getCollectionsQuery);
}

export async function getCollection(
  handle: string,
): Promise<CollectionResponse> {
  return fetchGraphQL(getCollectionQuery, { handle });
}
