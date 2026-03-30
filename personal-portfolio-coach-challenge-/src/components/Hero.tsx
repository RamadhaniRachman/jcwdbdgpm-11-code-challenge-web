import avatar from "../assets/profile.png"; // sesuaikan nama file

export default function Hero() {
  return (
    <header className="pt-24 pb-12 px-4">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-primary-green">Ramadhani Rachman</span>
          </h1>
          <h2 className="text-2xl mb-4">Full-Stack Web Developer</h2>
          <p className="text-lg mb-8">
            Building scalable, high-performance web solutions with a focus on
            intuitive user experiences and real-world usability.
          </p>
          <div className="space-x-4">
            <a
              href="#portfolio"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border 
              border-primary-green bg-primary-green px-6 py-3 font-medium text-white shadow-md 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border 
              border-primary-green bg-white px-6 py-3 font-medium text-primary-green shadow-md 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          {/* avatar */}
          <div className="w-64 h-64 rounded-full border-4 border-primary-green flex items-center justify-center overflow-hidden">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
