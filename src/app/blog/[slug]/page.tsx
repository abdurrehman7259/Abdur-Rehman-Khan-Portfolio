import { BlogHeader } from "@/components/blog/BlogHeader";
import { PostView } from "@/components/blog/PostView";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className=" min-h-screen">
      <BlogHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PostView slug={slug} />
      </main>
    </div>
  );
}
