import { GraphQLResponse } from "/types";
import {
  productQuery,
  productsQuery,
  recentProductsQuery,
} from "./queries/product";
import { getCollectionsQuery, getCollectionQuery } from "./queries/collections";

async function fetchGraphQL(
  query: string,
  variables?: Object,
): Promise<GraphQLResponse> {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN!,
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

export async function getProduct(id: string): Promise<GraphQLResponse> {
  return fetchGraphQL(productQuery, {
    id: `gid://shopify/Product/${id}`,
  });
}

export async function getProducts(): Promise<GraphQLResponse> {
  return fetchGraphQL(productsQuery);
}

export async function getRecentProducts(first: number): Promise<GraphQLResponse> {
    return fetchGraphQL(recentProductsQuery, { first });
  }

export async function fetchAllCollections(): Promise<GraphQLResponse> {
  return fetchGraphQL(getCollectionsQuery);
}

export async function getCollection(handle: string): Promise<GraphQLResponse> {
  return fetchGraphQL(getCollectionQuery, { handle });
}
