import Image from 'next/image';

interface ImageComponentProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

function ImageComponent({
  src,
  alt,
  width,
  height,
  fill,
  className,
}: ImageComponentProps) {
  const DEFAULT_IMG = '/image-coming-soon.jpg';
  const DEFAULT_ALT = 'No image for this product.';

  return (
    <Image
      src={src || DEFAULT_IMG}
      alt={alt || DEFAULT_ALT}
      width={width}
      height={height}
      fill={fill}
      className={
        className || 'object-cover transition-transform hover:scale-105'
      }
      placeholder="blur"
      blurDataURL={src || DEFAULT_IMG}
    />
  );
}

export default ImageComponent;
