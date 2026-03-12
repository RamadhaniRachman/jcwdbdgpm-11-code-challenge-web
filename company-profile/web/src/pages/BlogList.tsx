import { Link } from "react-router-dom";

// Data sementara (simulasi hasil dari prisma.blogs.findMany({ include: { users: true } }))
const mockBlogs = [
  {
    id: 1,
    title: "Navigating Global Market Volatility in 2024",
    summary:
      "Exploring the macroeconomic shifts and portfolio rebalancing strategies for institutional investors.",
    image_url:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    created_at: "2023-10-22T08:00:00Z",
    users: {
      fullname: "Robert Chen",
    },
  },
  {
    id: 2,
    title: "Digital Transformation: Beyond the Buzzword",
    summary:
      "Practical steps for legacy businesses to implement meaningful digital change across their entire value chain.",
    image_url:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    created_at: "2023-10-18T14:30:00Z",
    users: {
      fullname: "Sarah Williams",
    },
  },
  {
    id: 3,
    title: "Building a High-Performance Remote Culture",
    summary:
      "Lessons from the world's most successful distributed teams on maintaining productivity and engagement.",
    image_url:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    created_at: "2023-10-15T09:15:00Z",
    users: {
      fullname: "Michael Ross",
    },
  },
  {
    id: 4,
    title: "Optimizing Supply Chains for Resilience",
    summary:
      "Managing risk and building agility into global logistics networks in an increasingly unpredictable world.",
    image_url:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a50?q=80&w=2070&auto=format&fit=crop",
    created_at: "2023-10-10T11:45:00Z",
    users: {
      fullname: "David Goggins",
    },
  },
];

// Helper function untuk format tanggal ISO ke "MMM DD, YYYY"
const formatDate = (isoString?: string | null): string => {
  // 1. Mencegah error jika data kosong
  if (!isoString) return "Unknown Date";

  const date = new Date(isoString);

  // 2. Mencegah error "Invalid Date"
  if (isNaN(date.getTime())) return "Invalid Date";

  // 3. Opsi langsung dimasukkan ke dalam parameter agar TypeScript tidak protes
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function BlogList() {
  // Memisahkan artikel pertama sebagai "Featured" dan sisanya sebagai daftar Grid
  const featuredBlog = mockBlogs[0];
  const latestBlogs = mockBlogs.slice(1);

  return (
    <div className="bg-global font-display transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-global">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Insights &{" "}
              <span className="text-background-primary">Perspectives</span>
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
        {/* Featured Article (Dinamis dari index 0) */}
        {featuredBlog && (
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 bg-global rounded-2xl overflow-hidden shadow-lg border border-secondary/10 group cursor-pointer hover:border-background-primary transition-all">
              <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featuredBlog.image_url})` }}
                ></div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest text-primary bg-background-primary rounded-full mb-6 uppercase w-fit">
                  Featured Insight
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-primary group-hover:text-background-primary transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-secondary mb-8 leading-relaxed text-lg">
                  {featuredBlog.summary}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  {/* Avatar dummy karena di Prisma belum ada avatar user */}
                  <div className="size-12 rounded-full border-2 border-background-primary bg-primary flex items-center justify-center text-background-primary font-bold text-lg">
                    {featuredBlog.users?.fullname?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">
                      {featuredBlog.users?.fullname || "Unknown Author"}
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
            </div>
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
                <span className="material-symbols-outlined">filter_list</span>
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
                <div className="aspect-video w-full overflow-hidden rounded-t-xl relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${blog.image_url})` }}
                  ></div>
                  {/* Badge Article */}
                  <div className="absolute top-4 left-4 bg-global/90 backdrop-blur-sm px-3 py-1 rounded-md">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Article
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-background-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>

                  <div className="mt-auto pt-4 border-t border-secondary/10 flex items-center justify-between">
                    <div className="text-xs">
                      <p className="font-bold text-primary">
                        {blog.users?.fullname || "Unknown Author"}
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
      </div>
    </div>
  );
}
