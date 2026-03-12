import { Link, useParams } from "react-router-dom";

// Data sementara
const mockBlogDetail = {
  id: 1,
  title: "Navigating Global Market Volatility in 2024: A Strategic Guide",
  image_url:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
  created_at: "2023-10-22T08:00:00Z",
  users: {
    fullname: "Robert Chen",
  },
};

// PERBAIKAN 1: Fungsi formatDate yang kebal dari error (Safe Date Parsing)
const formatDate = (isoString?: string | null): string => {
  // Jika string kosong atau undefined, kembalikan teks default
  if (!isoString) return "Unknown Date";

  const date = new Date(isoString);

  // Jika format string salah (menghasilkan Invalid Date), kembalikan teks default
  if (isNaN(date.getTime())) return "Invalid Date";

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogDetail() {
  // const { id } = useParams();
  const blog = mockBlogDetail;

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
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-secondary">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-primary font-bold">
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
          {/* Tambahan kondisi jika image_url kosong/error */}
          {blog.image_url ? (
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-secondary">
              <span className="material-symbols-outlined text-4xl">
                image_not_supported
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PERBAIKAN 2: Menghapus dangerouslySetInnerHTML dan menggantinya dengan JSX murni yang 100% aman */}
        <article className="max-w-none">
          <p className="text-secondary leading-loose mb-6 text-lg">
            The global economic landscape is undergoing a period of profound
            transformation. As we navigate through 2024, institutional investors
            and corporate leaders are faced with a unique set of challenges and
            opportunities. Understanding these macroeconomic shifts is no longer
            optional; it is imperative for survival and growth.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-primary mt-12 mb-6">
            The Shift in Monetary Policy
          </h2>

          <p className="text-secondary leading-loose mb-6 text-lg">
            For the past decade, markets have grown accustomed to near-zero
            interest rates and quantitative easing. However, the paradigm has
            shifted. Central banks worldwide are prioritizing inflation control
            over aggressive growth stimulation.
          </p>

          <blockquote className="border-l-4 border-background-primary bg-secondary/5 py-4 px-6 md:px-8 my-8 rounded-r-xl text-xl text-primary font-medium italic leading-relaxed">
            "Volatility is not just a risk to be managed, but a landscape to be
            navigated with precision and foresight."
          </blockquote>

          <p className="text-secondary leading-loose mb-6 text-lg">
            This transition requires a fundamental reassessment of capital
            allocation. Companies must stress-test their balance sheets against
            sustained higher borrowing costs. Cash flow generation and
            operational efficiency are returning as the primary metrics of
            corporate health.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-primary mt-12 mb-6">
            Strategic Portfolio Rebalancing
          </h2>

          <p className="text-secondary leading-loose mb-6 text-lg">
            In this environment, traditional 60/40 portfolio models are being
            challenged. We are advising our clients at ProCorp to look beyond
            conventional asset classes. Considerations include:
          </p>

          <ul className="list-disc pl-6 mb-8 text-secondary text-lg space-y-3">
            <li>
              <strong className="text-primary">Alternative Investments:</strong>{" "}
              Private equity and real assets that offer inflation protection.
            </li>
            <li>
              <strong className="text-primary">
                Geographic Diversification:
              </strong>{" "}
              Emerging markets with strong demographic dividends.
            </li>
            <li>
              <strong className="text-primary">Sector Focus:</strong> Defensive
              sectors like healthcare and utilities, combined with structural
              growth areas like AI infrastructure.
            </li>
          </ul>
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
          <div className="size-20 rounded-full border-2 border-background-primary bg-global flex items-center justify-center text-primary font-black text-3xl shrink-0 z-10">
            {blog.users?.fullname?.charAt(0) || "U"}
          </div>
          <div className="text-center sm:text-left z-10">
            <h3 className="text-xl font-bold text-global mb-1">
              {blog.users?.fullname || "Unknown Author"}
            </h3>
            <p className="text-background-primary text-sm font-bold uppercase tracking-wider mb-3">
              Senior Partner & Analyst
            </p>
            <p className="text-global/80 leading-relaxed text-sm">
              {blog.users?.fullname || "Our author"} is a seasoned strategist
              specializing in global market trends and enterprise resilience.
              With over 15 years of experience, they help organizations build
              robust frameworks for sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
