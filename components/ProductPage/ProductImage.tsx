import Image from "next/image";

export default function ProductImage({ image }) {
  return (
    <div className="md:w-1/3">
      <Image
        src={image.url}
        alt={image.altText}
        width={500}
        height={500}
        className="rounded-lg shadow-2xl object-cover object-center transition-transform duration-500 hover:scale-105"
        placeholder="blur"
        blurDataURL={image.url}
      />
    </div>
  );
}
