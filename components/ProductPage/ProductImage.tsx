import Image from 'next/image';
import { FeaturedImage } from 'lib/types';

interface ProductImageProps {
  image: FeaturedImage;
}

export default function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="md:w-1/3">
      <Image
        src={image?.url || '/image-coming-soon.jpg'}
        alt={image?.altText || "No image for this product."}
        width={500}
        height={500}
        className="rounded-lg shadow-2xl object-cover object-center transition-transform duration-500 hover:scale-105"
        placeholder="blur"
        blurDataURL={image?.url || '/image-coming-soon.jpg'}
      />
    </div>
  );
}
