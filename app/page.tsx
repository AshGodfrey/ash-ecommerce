import RecentProducts from 'components/RecentProducts';
import HeroBanner from 'components/HeroBanner';
import FeaturedProduct from 'components/FeaturedProduct';

export default async function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedProduct />
      <RecentProducts />
    </div>
  );
}
