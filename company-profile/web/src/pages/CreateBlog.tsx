import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null); // State baru untuk menangkap error
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Reset error setiap kali mulai submit

    try {
      // Menembak API Backend dengan metode POST
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/blogs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            summary: summary,
            image_url: imageUrl,
            content: content,
            author_id: Number(localStorage.getItem("userId")) || 1,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Gagal menerbitkan artikel ke database.",
        );
      }

      // Jika berhasil
      alert("Artikel berhasil diterbitkan!");
      navigate("/blogs"); // Kembali ke halaman daftar blog
    } catch (err: any) {
      console.error("Submit Error:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fungsi Logout sederhana
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="bg-global font-display min-h-screen transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Cancel dan Logout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b-2 border-secondary/10">
          <div>
            <h1 className="text-3xl font-black text-primary tracking-tight">
              Create New Insight
            </h1>
            <p className="text-secondary font-medium mt-1">
              Publish a new article to the ProCorp blog.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/blogs"
              className="px-4 py-2 text-sm font-bold text-secondary border-2 border-secondary/20 rounded-lg hover:bg-secondary/10 transition-colors"
            >
              Cancel
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-bold text-red-500 border-2 border-red-500/20 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                logout
              </span>
              Logout
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-secondary/10 relative overflow-hidden"
        >
          {/* Efek Glow di sudut form */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-background-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            {/* Tempat Menampilkan Pesan Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-sm font-bold">
                ⚠️ {error}
              </div>
            )}

            {/* Input Title */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/5 border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:bg-white outline-none transition-all text-lg font-bold"
                placeholder="e.g. Navigating Global Market Volatility in 2024"
              />
            </div>

            {/* Input Summary */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Summary / Excerpt *
              </label>
              <textarea
                required
                rows={2}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/5 border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:bg-white outline-none transition-all resize-none"
                placeholder="A brief summary of what this article is about..."
              />
              <p className="text-xs text-secondary mt-1.5 font-medium">
                This will appear on the blog list cards.
              </p>
            </div>

            {/* Input Image URL */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Cover Image URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                  <span className="material-symbols-outlined text-lg">
                    image
                  </span>
                </div>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-secondary/5 border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:bg-white outline-none transition-all"
                  placeholder="https://images.unsplash.com/photo-..."
                />
              </div>
            </div>

            {/* Input Content */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2 flex items-center justify-between">
                <span>Main Content *</span>
              </label>
              <textarea
                required
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-4 bg-secondary/5 border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:bg-white outline-none transition-all leading-relaxed font-mono text-sm"
                placeholder="Write your brilliant ideas here..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-secondary/10 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 bg-background-primary text-primary font-black px-8 py-3.5 rounded-lg shadow-lg shadow-background-primary/20 transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-[1.02] hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></span>
                    Publishing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">
                      send
                    </span>
                    Publish Article
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
