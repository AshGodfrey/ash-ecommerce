import Link from 'next/link';
import client from 'lib/contentfulClient';

export default async function HeroBanner() {
  const page = await client.getEntry(process.env.HOMEPAGE_CONTENT);
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <img
        src={page.fields.heroBannerImage.fields.file.url}
        alt={page.fields.heroBannerImage.fields.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white bg-opacity-50 bg-slate-800">
        <div className="text-center">
          <h1 className="text-4xl font-display font-extrabold text-white mb-2">
            {page.fields.heroBannerHeadline}
          </h1>
          <Link href="/products">
            <button className="bg-slate-400 hover:bg-slate-700 text-white py-2 px-4 rounded-md text-lg font-medium">
              Shop the collection now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
