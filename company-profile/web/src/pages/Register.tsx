import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validasi sederhana
    if (password !== confirmPassword) {
      setError("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal harus 6 karakter!");
      return;
    }

    setIsLoading(true);

    // Simulasi pengiriman data ke Backend (Prisma: prisma.users.create({...}))
    setTimeout(() => {
      console.log("Data User Baru:", { fullname, email, password });

      // Simulasi sukses: Kita langsung "login"-kan user setelah berhasil daftar
      localStorage.setItem("isAuthenticated", "true");

      setIsLoading(false);
      alert("Registrasi berhasil! Selamat datang di ProCorp.");
      navigate("/create-blog"); // Langsung arahkan ke dashboard/create blog
    }, 1500);
  };

  return (
    // Latar belakang halaman abu-abu muda agar card putih lebih menonjol
    <div className="bg-secondary/5 font-display min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full relative">
        {/* Efek Glow Mint di belakang form */}
        <div className="absolute -inset-1 bg-background-primary/40 blur-xl rounded-2xl pointer-events-none"></div>

        {/* Card diubah ke bg-global (Putih) */}
        <div className="relative bg-global rounded-2xl p-8 md:p-10 shadow-xl border border-secondary/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center size-12 rounded-full bg-background-primary text-primary mb-4 shadow-lg shadow-background-primary/20">
              <span className="material-symbols-outlined text-2xl">
                person_add
              </span>
            </div>
            {/* Teks diubah ke text-primary (Gelap) */}
            <h2 className="text-3xl font-black text-primary tracking-tight">
              Create Account
            </h2>
            <p className="text-secondary mt-2 text-sm font-medium">
              Join ProCorp to start writing insights
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm text-center font-medium">
                {error}
              </div>
            )}

            {/* Input Full Name */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                  <span className="material-symbols-outlined text-lg">
                    badge
                  </span>
                </div>
                {/* Input putih dengan teks gelap */}
                <input
                  type="text"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:ring-1 focus:ring-background-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Input Email */}
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
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:ring-1 focus:ring-background-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Input Password */}
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
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Input Confirm Password */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                  <span className="material-symbols-outlined text-lg">
                    password
                  </span>
                </div>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-secondary/20 rounded-lg text-primary placeholder-secondary/50 focus:border-background-primary focus:ring-1 focus:ring-background-primary outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-background-primary text-primary font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-background-primary/30 transition-all duration-300 flex justify-center items-center gap-2 ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></span>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-secondary">
            Already have an account? {/* Tautan disesuaikan warnanya */}
            <Link
              to="/login"
              className="font-bold text-primary hover:underline transition-colors ml-1"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
