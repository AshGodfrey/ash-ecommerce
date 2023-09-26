import client from 'lib/contentfulClient';
import Image from 'next/image';
import Link from 'next/link';

interface LogoFields {
  logo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  alt: string;
}

interface LogoEntry {
  fields: LogoFields;
}

export default async function Logo() {
  const logo = (await client.getEntry(
    process.env.HEADER_CONTENT!,
  )) as unknown as LogoEntry;

  const logoUrl = logo.fields?.logo?.fields?.file?.url;
  const logoAlt = logo.fields?.alt;

  if (!logoUrl || !logoAlt) {
    return null;
  }
  return (
    <Link href="/" className="text-2xl font-bold">
      <Image src={'https:' + logoUrl} alt={logoAlt} width={400} height={250} />
    </Link>
  );
}
