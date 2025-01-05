import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { components } from "@/components/CustomComponent";

// Define the PageProps type for Next.js
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  // Await params before destructuring
  const { slug } = await params; // Await and destructure slug

  const query = `*[_type == 'post' && slug.current == $slug]{
    title, summary, image, content,
    author->{bio, image, name}
  }[0]`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Post not found
      </div>
    );
  }

  const imageUrl = post.image ? urlFor(post.image).url() : "/fallback-image.jpg";

  return (
    <article className=" px-4 2xl:px-12 flex flex-col gap-y-8 bg-sky-950 text-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl xs:text-4xl lg:text-6xl font-bold">
        {post.title}
      </h1>
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={post.title || "Featured image"}
        className="rounded-lg shadow-md"
      />
      {post.author && (
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          {post.author.image && (
            <Image
              src={urlFor(post.author.image).url()}
              width={200}
              height={200}
              alt={post.author.name || "Author"}
              className="object-cover rounded-full h-16 w-16 sm:h-24 sm:w-24 border-2 border-blue-500"
            />
          )}
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">
              {post.author.name || "Unknown Author"}
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-gray-400">
              {post.author.bio || "No bio available"}
            </p>
          </div>
        </section>
      )}
      <section className="text-lg leading-normal text-gray-300">
        <PortableText value={post.content || []} components={components} />
      </section>
    </article>
  );
}

// Generate Static Params for Dynamic Routes
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);

  return slugs.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
