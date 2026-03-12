export default function Footer() {
  return (
    <footer className="bg-primary text-global py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} BrandLogo. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Innovating the future, today.
        </p>
      </div>
    </footer>
  );
}
