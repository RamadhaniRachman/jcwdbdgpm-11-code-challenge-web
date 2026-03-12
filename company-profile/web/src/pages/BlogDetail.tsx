import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// 1. Interface yang sesuai dengan Prisma
interface User {
  fullname: string | null;
}

interface Blog {
  id: number;
  title: string | null;
  content: string | null;
  summary: string | null;
  image_url: string | null;
  created_at: string;
  users?: User | null;
}

// 2. Fungsi formatDate
const formatDate = (isoString?: string | null): string => {
  if (!isoString) return "Unknown Date";
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogDetail() {
  // 3. Ambil ID dari URL (misal: /blog/5, maka id = "5")
  const { id } = useParams<{ id: string }>();

  // 4. State untuk menyimpan data detail blog
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 5. Ambil data dari Backend berdasarkan ID
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Gagal mengambil detail artikel");
        }

        // Simpan data ke state
        if (data.data) {
          setBlog(data.data);
        } else {
          setBlog(data);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlogDetail();
    }
  }, [id]);

  // 6. Tampilan saat Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-global">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-background-primary"></div>
      </div>
    );
  }

  // 7. Tampilan saat Error atau Artikel tidak ditemukan
  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-global gap-6 px-4 text-center">
        <div className="bg-red-50 text-red-500 p-6 rounded-lg font-bold border border-red-200 shadow-sm">
          {error || "Artikel tidak ditemukan."}
        </div>
        <Link
          to="/blogs"
          className="text-primary font-bold hover:text-background-primary transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Kembali ke Daftar Insight
        </Link>
      </div>
    );
  }

  // 8. Tampilan Utama jika sukses ditarik
  return (
    <div className="bg-global font-display min-h-screen transition-colors duration-300">
      {/* Blog Header & Hero Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-background-primary transition-colors mb-8 group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Back to Insights
        </Link>

        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight mb-6">
            {blog.title || "Untitled Article"}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-secondary">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-primary font-bold uppercase">
                {blog.users?.fullname?.charAt(0) || "U"}
              </div>
              <span className="font-bold text-primary">
                {blog.users?.fullname || "Unknown Author"}
              </span>
            </div>
            <span className="hidden sm:block text-secondary/30">•</span>
            <span className="font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              {formatDate(blog.created_at)}
            </span>
          </div>
        </div>

        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-secondary/10 relative bg-secondary/10">
          {blog.image_url ? (
            <img
              src={blog.image_url}
              alt={blog.title || "Blog cover"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full text-secondary gap-2">
              <span className="material-symbols-outlined text-5xl opacity-50">
                image_not_supported
              </span>
              <span className="font-medium opacity-50">No Cover Image</span>
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-none">
          {/* Gunakan whitespace-pre-wrap agar enter/baris baru dari textarea 
            saat di CreateBlog tetap terbaca sebagai paragraf baru.
          */}
          <div className="text-secondary leading-loose mb-6 text-lg whitespace-pre-wrap font-medium">
            {blog.content || "Belum ada konten untuk artikel ini."}
          </div>
        </article>

        {/* Share & Tag Section */}
        <div className="mt-16 pt-8 border-t border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-bold text-primary">Share this article:</span>
            <button className="size-10 rounded-full bg-secondary/10 text-primary flex items-center justify-center hover:bg-background-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                link
              </span>
            </button>
            <button className="size-10 rounded-full bg-secondary/10 text-primary flex items-center justify-center hover:bg-background-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </button>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 bg-primary p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-background-primary/20 blur-2xl rounded-full pointer-events-none"></div>
          <div className="size-20 rounded-full border-2 border-background-primary bg-global flex items-center justify-center text-primary font-black text-3xl shrink-0 z-10 uppercase">
            {blog.users?.fullname?.charAt(0) || "U"}
          </div>
          <div className="text-center sm:text-left z-10">
            <h3 className="text-xl font-bold text-global mb-1">
              {blog.users?.fullname || "Unknown Author"}
            </h3>
            <p className="text-background-primary text-sm font-bold uppercase tracking-wider mb-3">
              ProCorp Author
            </p>
            <p className="text-global/80 leading-relaxed text-sm">
              {blog.users?.fullname || "This author"} is a valued contributor to
              the ProCorp Insights platform, sharing expertise and strategic
              vision for modern businesses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
