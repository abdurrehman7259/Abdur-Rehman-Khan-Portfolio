import { BlogList } from "@/components/blog/BlogList";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { SetupNotice } from "@/components/blog/SetupNotice";
import { fetchPublishedPosts, isBlogConfigured } from "@/lib/posts-public";

export const metadata = {
  title: "Blog | Abdur Rehman Khan",
  description:
    "How Abdur Rehman Khan builds software end to end: requirements, user stories, agentic workflows, pipelines and security.",
};

// Rendered on the server and refreshed at most every 60 seconds (POSTS_REVALIDATE_SECONDS).
export const revalidate = 60;

export default async function BlogPage() {
  let posts = null;
  try {
    posts = await fetchPublishedPosts();
  } catch {
    posts = null;
  }

  return (
    <div className="min-h-screen">
      <BlogHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">The Blog</h1>
        <p className="mt-2 text-muted">
          How I build software end to end: requirements, user stories, agentic workflows, pipelines and security.
        </p>
        {!isBlogConfigured ? (
          <div className="mt-10">
            <SetupNotice />
          </div>
        ) : posts === null ? (
          <p className="mt-10 text-muted" role="status">
            Posts could not be loaded right now. Please try again in a minute.
          </p>
        ) : (
          <BlogList posts={posts} />
        )}
      </main>
    </div>
  );
}
