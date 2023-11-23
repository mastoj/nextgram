import Link from "next/link";
import swagPhotos from "./../photos";
import Image from "next/image";

type Props = {
  params: {
    market: string;
  };
  searchParams: any;
};

export default function Home({ params, searchParams }: Props) {
  const photos = swagPhotos;

  console.log(params, searchParams);

  const createLink = (id: string) => {
    if (searchParams["no-rewrite"]) {
      return `/${params.market}/photos/${id}?no-rewrite=true`;
    }
    return `/photos/${id}`;
  };

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }) => (
          <Link key={id} href={createLink(id)}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
