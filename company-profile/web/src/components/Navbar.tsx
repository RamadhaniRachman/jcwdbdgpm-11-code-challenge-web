import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-secondary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              BrandLogo
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              to="/about"
              className="text-primary hover:text-background-primary"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-primary hover:text-background-primary"
            >
              Services
            </Link>
            <Link
              to="/teams"
              className="text-primary hover:text-background-primary"
            >
              Teams
            </Link>
            <Link
              to="/blogs"
              className="text-primary hover:text-background-primary"
            >
              Blog
            </Link>
            <Link
              to="/create-blog"
              className="rounded-lg bg-background-primary px-6 py-2 text-sm font-bold text-primary shadow-lg shadow-background-primary/30 hover:scale-105 transition-transform"
            >
              Write
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
