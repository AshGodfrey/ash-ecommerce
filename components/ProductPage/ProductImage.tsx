import Image from 'next/image';
import { FeaturedImage } from 'lib/types';
import ImageComponent from 'components/ImageComponent';

interface ProductImageProps {
  image: FeaturedImage;
}

export default function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="md:w-1/3">
      <ImageComponent
        src={image?.url}
        alt={image?.altText}
        width={500}
        height={500}
        className="rounded-lg shadow-2xl object-cover object-center transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
