import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";
import { PostView } from "@/components/blog/PostView";
import { fetchPublishedPost, fetchPublishedPosts } from "@/lib/posts-public";

// Rendered on the server; refreshed at most every 60 seconds. New posts work without a redeploy.
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    return (await fetchPublishedPosts()).map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPublishedPost(slug).catch(() => null);
  if (!post) return { title: "Post not found | Abdur Rehman Khan" };
  return { title: `${post.title} | Abdur Rehman Khan`, description: post.excerpt };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await fetchPublishedPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar name={portfolioData.basics.name} />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-12 focus:outline-none sm:px-6 sm:py-16">
        <PostView post={post} />
      </main>
      <Footer name={portfolioData.basics.name} />
    </>
  );
}
