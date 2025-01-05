import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BlogCard({ post }: { post: Post }) {
  // Ensure the type is correct
  return (
    <div>
      <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
        {/* Image Section */}
        <div className="relative max-h-76 flex-1">
          <Image
            src={urlFor(post.image).url()} // Ensure this returns a string URL
            alt="AI for everyone"
            fill
            className="object-cover rounded-t"
          />
        </div>

        {/* Title and Summary */}
        <div className="flex flex-col justify-between gap-y-4 p-4">
          <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
            {post.title}
          </h2>

          {/* Read More dynamic Link */}
          <Button asChild>
            <Link
              href={`/blog/${post.slug}`} // Corrected dynamic link syntax
              className="block px-4 py-1 text-center bg-sky-950 rounded text-dark font-semibold mt-4"
            >
              Read More
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
