export default function () {
  return (
    <section id="skills" className="px-4 py-20">
      <div className=" mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skill
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Front End</h3>
            <ul className="space-y-3">
              <li>• HTML5 & CSS</li>
              <li>• TypeScript & JavaScript</li>
              <li>• React.js & Vite</li>
              <li>• Tailwind CSS</li>
              <li>• Angular </li>
              <li>• UI/UX Design</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Back-End</h3>
            <ul className="space-y-3">
              <li>• Node.js</li>
              <li>• RESTful APIs</li>
              <li>• MongoDB</li>
              <li>• Ruby</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              DevOps & Tools
            </h3>
            <ul className="space-y-3">
              <li>• Docker</li>
              <li>• Git</li>
              <li>• AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
