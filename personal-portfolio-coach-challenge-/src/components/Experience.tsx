export function Experience() {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          {/* membuat garis slider */}
          <div className="relative border-l-2 border-third-green ml-3 md:ml-0 pl-6 md:pl-8 space y-12 ">
            {/* Experience 1 */}
            <div className="relative">
              {/* membuat dot pada slider */}
              <div className="absolute -left-8 md:-left-10 w-4 h-4 bg-primary-green rounded-full mt-1.5"></div>
              <h3 className="text-xl font-bold mt-2">
                Freelance Full-Stack Developer
              </h3>
              <p className="text-primary-green font-medium mb-2">
                Independent • 2023 - Present
              </p>
              <ul className="list-disc ml-4 space-y-1">
                <li>
                  Architected and deployed responsive web applications using
                  React and Vite.
                </li>
                <li>
                  Designed intuitive UI/UX flows, ensuring high comfort and
                  accessibility for end-users.
                </li>
                <li>
                  Conducted thorough real-world usage testing to identify and
                  resolve performance bottlenecks.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              {/* membuat dot pada slider */}
              <div className="absolute -left-8 md:-left-10 w-4 h-4 bg-gray-300 rounded-full mt-1.5"></div>
              <h3 className="text-xl font-bold mt-2">Web Development Intern</h3>
              <p className="text-primary-green font-medium mb-2">
                Tech Solutions Inc. • 2022 - 2023
              </p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Assisted in building REST APIs using Node.js.</li>
                <li>
                  Collaborated with senior developers to translate Figma designs
                  into pixel-perfect HTML/CSS.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
