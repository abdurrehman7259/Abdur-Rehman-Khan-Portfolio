import { AdminGuard } from "@/components/blog/AdminGuard";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { PostEditor } from "@/components/blog/PostEditor";

export default async function EditorPage({ params }) {
  const { id } = await params;
  return (
    <div className=" min-h-screen">
      <BlogHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <AdminGuard>
          <PostEditor id={id} />
        </AdminGuard>
      </main>
    </div>
  );
}
