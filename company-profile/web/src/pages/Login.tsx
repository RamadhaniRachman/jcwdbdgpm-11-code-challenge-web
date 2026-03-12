import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Simulasi validasi sederhana
    if (email === "admin@procorp.com" && password === "admin123") {
      // Simpan token/status ke localStorage
      localStorage.setItem("isAuthenticated", "true");
      // Arahkan ke halaman Create Blog
      navigate("/create-blog");
    } else {
      setError("Email atau password salah. Coba: admin@procorp.com / admin123");
    }
  };

  return (
    // Background halaman diberi sedikit abu-abu (bg-secondary/5) agar card putihnya menonjol
    <div className="bg-secondary/5 font-display min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full relative">
        {/* Efek Glow Mint di belakang form */}
        <div className="absolute -inset-1 bg-background-primary/40 blur-xl rounded-2xl pointer-events-none"></div>

        {/* Card diubah ke bg-global (Putih) */}
        <div className="relative bg-global rounded-2xl p-8 md:p-10 shadow-xl border border-secondary/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center size-12 rounded-full bg-background-primary text-primary mb-4 shadow-lg shadow-background-primary/20">
              <span className="material-symbols-outlined text-2xl">lock</span>
            </div>
            {/* Teks diubah ke text-primary (Gelap) */}
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Welcome Back
            </h2>
            <p className="text-secondary mt-2 text-sm font-medium">
              Sign in to manage your insights
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm text-center font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                  <span className="material-symbols-outlined text-lg">
                    mail
                  </span>
                </div>
                {/* Input background putih transparan dengan border abu-abu */}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:ring-1 focus:ring-background-primary outline-none transition-all"
                  placeholder="admin@procorp.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                  <span className="material-symbols-outlined text-lg">key</span>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:ring-1 focus:ring-background-primary outline-none transition-all"
                  placeholder="admin123"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-secondary cursor-pointer hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-secondary/30 bg-white text-background-primary focus:ring-background-primary"
                />
                Remember me
              </label>
              <a
                href="#"
                className="font-bold text-primary hover:underline hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-background-primary text-primary font-bold py-3.5 px-4 rounded-lg hover:scale-[1.02] shadow-lg shadow-background-primary/30 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-secondary">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-primary hover:underline transition-colors ml-1"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
