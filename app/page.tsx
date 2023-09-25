import Image from "next/image";
import { createClient } from "contentful";
import Link from "next/link";
import { getRecentProducts } from "lib/shopify";
import RecentProducts from "/components/RecentProducts";
import HeroBanner from "/components/HeroBanner";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export default async function Home() {
  const page = await client.getEntry("2cayfg7wVF5WezADCHgSgL");
  const json = await getRecentProducts(3);
  return (
    <div>
      <HeroBanner page={page} />
      <RecentProducts products={json.data.products.nodes} />
    </div>
  );
}
