import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ? (
        <Image
          className="w-full aspect-[800/400]"
          src={urlFor(post.mainImage)
            .width(1600)
            .height(900)
            .quality(100)
            .auto("format")
            .url()}
          alt={post?.mainImage?.alt || ""}
          width="1600"
          height="900"
        />
      ) : null}

      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      {post?.body ? (
        <div className="prose">
          <PortableText value={post?.body} components={components} />
        </div>
      ) : null}
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
