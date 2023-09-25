import RecentProducts from "/components/RecentProducts";
import HeroBanner from "/components/HeroBanner";


export default async function Home() {
  return (
    <div>
      <HeroBanner />
      <RecentProducts />
    </div>
  );
}
