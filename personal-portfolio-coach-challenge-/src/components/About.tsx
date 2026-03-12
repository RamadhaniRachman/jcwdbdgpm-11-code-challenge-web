export default function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className=" mx-auto text-center max-w-4xl">
        <h2 className="font-bold text-3xl mb-8">About Me</h2>
        <p className="text-lg mb-8">
          I am an Informatics Engineering graduate with a strong interest in web
          development and digital technology. Currently, I am enrolled in a
          bootcamp at Purwadhika to further strengthen my technical skills and
          enhance my professional readiness.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 text-left gap-6">
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="font bold text-xl mb-2 text-primary-green">
              Timeliness
            </h3>
            <p className="text-black">
              I respect deadlines as much as I respect the code. Efficient
              project management and consistent delivery are non-negotiable for
              me.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="font bold text-xl mb-2 text-primary-green">
              Attention to Detail
            </h3>
            <p className="text-black">
              Ensuring every line of code is clean and well-structured. I focus
              on everything from responsive UI precision to optimized backend
              logic for a flawless user experience.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="font bold text-xl mb-2 text-primary-green">
              Clear Communication
            </h3>
            <p className="text-black">
              I prioritize transparency. Whether it's documenting code or
              discussing project requirements, I ensure everyone is on the same
              page to achieve the best results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
