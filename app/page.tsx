import Image from "next/image";
import { createClient } from "contentful";
import Link from "next/link";
import { getRecentProducts } from "lib/shopify";
import RecentProducts from "/components/RecentProducts";
import HeroBanner from "/components/HeroBanner";
import client from 'lib/contentfulClient';


export default async function Home() {
  const page = await client.getEntry(process.env.HOMEPAGE_CONTENT);
  const json = await getRecentProducts(3);
  return (
    <div>
      <HeroBanner page={page} />
      <RecentProducts products={json.data.products.nodes} />
    </div>
  );
}
