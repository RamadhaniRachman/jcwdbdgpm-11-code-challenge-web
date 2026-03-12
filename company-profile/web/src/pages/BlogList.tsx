import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

// 1. Interface
interface User {
  fullname: string | null;
}

interface Blog {
  id: number;
  title: string | null;
  summary: string | null;
  image_url: string | null;
  created_at: string;
  users?: User | null;
}

const formatDate = (isoString?: string | null): string => {
  if (!isoString) return "Unknown Date";
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function BlogList() {
  // 2. Siapkan State untuk menyimpan data dari database
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalEvents, setTotalEvents] = useState(0);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 3;
  const offset = (page - 1) * limit;
  const totalPages = Math.ceil(totalEvents / limit);

  // 3. Gunakan useEffect untuk menarik data (Fetch API) saat halaman pertama kali dimuat
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Karena .env sudah diperbaiki, gabungannya akan menjadi /api/blogs
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/blogs?pageSize=${limit}&offset=${offset}`,
        );
        const data = await response.json();

        console.log("Data asli dari API:", data);

        if (!response.ok) {
          throw new Error(data.message || "Gagal mengambil data blog");
        }

        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (data.data && Array.isArray(data.data)) {
          setBlogs(data.data);
        } else if (data.blogs && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          setBlogs([]);
          throw new Error("Format data dari API tidak sesuai ekspektasi.");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [limit, offset]); // Fetch saat pindah halaman

  // Mengambil blog terbaru. Ternary operator digunakan untuk mengidentifikasi apakah ada data tau tidak
  // Jika tidak ada blog maka akan menampilkan null
  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  // Mengambil sisa blog lainnya. Di slice 1 agar tidak memasukkan blog terbaru
  const latestBlogs = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div className="bg-global font-display transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-global">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Insights &
              <span className="text-background-primary"> Perspectives</span>
            </h1>
            <p className="text-lg md:text-xl text-global/80 font-normal leading-relaxed">
              Sharing our global expertise to help your business navigate the
              complexities of today's market through data-driven analysis and
              strategic foresight.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Jika database kosong, tampilkan pesan */}
        {blogs.length === 0 ? (
          <div className="text-center text-secondary py-20">
            <h3 className="text-2xl font-bold mb-2">Belum ada artikel</h3>
            <p>Jadilah yang pertama menulis artikel di ProCorp!</p>
          </div>
        ) : (
          <>
            {/* Featured Article (Dinamis dari index 0) */}
            {featuredBlog && (
              <section className="mb-16">
                <Link
                  to={`/blog/${featuredBlog.id}`}
                  className="flex flex-col lg:flex-row gap-8 bg-global rounded-2xl overflow-hidden shadow-lg border border-secondary/10 group cursor-pointer hover:border-background-primary transition-all"
                >
                  <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden bg-secondary/10">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${featuredBlog.image_url})`,
                      }}
                    ></div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-4 py-1 text-xs font-bold text-primary bg-background-primary rounded-full mb-6 uppercase w-fit">
                      Featured Insight
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-primary group-hover:text-background-primary transition-colors">
                      {featuredBlog.title || "Untitled Article"}
                    </h2>
                    <p className="text-secondary mb-8 leading-relaxed text-lg line-clamp-3">
                      {featuredBlog.summary ||
                        "Tidak ada ringkasan yang tersedia untuk artikel ini."}
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                      <div className="size-12 rounded-full border-2 border-background-primary bg-primary flex items-center justify-center text-background-primary font-bold text-lg uppercase">
                        {featuredBlog.users?.fullname?.charAt(0) || "A"}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          {featuredBlog.users?.fullname || "Admin"}
                        </p>
                        <p className="text-xs text-secondary font-medium">
                          {formatDate(featuredBlog.created_at)}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${featuredBlog.id}`}
                      className="w-fit rounded-lg bg-background-primary px-8 py-4 text-sm font-bold text-primary shadow-lg shadow-background-primary/30 hover:scale-105 transition-transform"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </Link>
              </section>
            )}

            {/* Latest Insights Grid */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-primary tracking-tight">
                  Latest Insights
                </h2>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg border-2 border-secondary/20 text-primary hover:bg-background-primary hover:border-background-primary transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined">
                      filter_list
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestBlogs.map((blog) => (
                  <Link
                    to={`/blog/${blog.id}`}
                    key={blog.id}
                    className="flex flex-col bg-global rounded-xl border border-secondary/10 shadow-sm hover:shadow-xl hover:border-background-primary transition-all duration-300 group cursor-pointer"
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-t-xl relative bg-secondary/10">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${blog.image_url})`,
                        }}
                      ></div>
                      <div className="absolute top-4 left-4 bg-global/90 backdrop-blur-sm px-3 py-1 rounded-md">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Article
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-background-primary transition-colors line-clamp-2">
                        {blog.title || "Untitled Article"}
                      </h3>
                      <p className="text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
                        {blog.summary || "Klik untuk membaca selengkapnya..."}
                      </p>

                      <div className="mt-auto pt-4 border-t border-secondary/10 flex items-center justify-between">
                        <div className="text-xs">
                          <p className="font-bold text-primary uppercase">
                            {blog.users?.fullname || "Admin"}
                          </p>
                          <p className="text-secondary font-medium mt-0.5">
                            {formatDate(blog.created_at)}
                          </p>
                        </div>
                        <span className="text-background-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read More{" "}
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
