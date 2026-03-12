export default function Navigation() {
  return (
    <>
      <nav className=" bg-white shadow-sm w-full sticky top-0">
        <div className="flex justify-between items-center px-4 py-4 mx-auto max-w-6xl">
          <div className="text-primary-green font-bold text-xl">RR</div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-primary-green">
              About
            </a>
            <a href="#skills" className="hover:text-primary-green">
              Skills
            </a>
            <a href="#portfolio" className="hover:text-primary-green">
              Portfolio
            </a>
            <a href="#experience" className="hover:text-primary-green">
              Experience
            </a>
            <a href="#contact" className="hover:text-primary-green">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
