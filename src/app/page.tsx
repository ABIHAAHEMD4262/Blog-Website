import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";

export const revalidate = 60; //seconds

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  
    summary,title,image,
      "slug":slug.current
  }`;

  const posts:Post[] = await client.fetch(query)
  // console.log(posts)

  return (
    <main className="bg-sky-950 flex min-h-screen flex-col dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold uppercase my-12 text-center text-white dark:text-gray-200 sm:text-4xl lg:text-6xl">
        Most Recent Blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          posts.map((post:Post)=>(
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" key={post.slug}>
              <BlogCard post={post} />
            </div>
          ))
        }
      </section>
    </main>
  );
}