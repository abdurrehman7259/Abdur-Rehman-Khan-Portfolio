import { AdminGuard } from "@/components/blog/AdminGuard";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { PostEditor } from "@/components/blog/PostEditor";

export default async function EditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="cyber-grid-bg min-h-screen">
      <BlogHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <AdminGuard>
          <PostEditor id={id} />
        </AdminGuard>
      </main>
    </div>
  );
}
