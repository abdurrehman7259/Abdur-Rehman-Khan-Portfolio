import { BlogList } from "@/components/blog/BlogList";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SetupNotice } from "@/components/blog/SetupNotice";
import { fetchPublishedPosts, isBlogConfigured } from "@/lib/posts-public";
import { portfolioData } from "@/data/portfolio";

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
    <>
      <Navbar name={portfolioData.basics.name} />
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto min-h-[60vh] max-w-page px-4 py-12 focus:outline-none sm:px-6 sm:py-16 lg:px-8"
      >
        <p className="eyebrow">Blog</p>
        <h1 className="section-title mt-3 max-w-3xl">Writing</h1>
        <p className="section-lead">
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
      <Footer name={portfolioData.basics.name} />
    </>
  );
}
