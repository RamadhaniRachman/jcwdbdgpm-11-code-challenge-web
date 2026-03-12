export function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        {/* membuat card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-gray-100">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">
              E-commerce Platform for XYZ Retail
            </h3>
            <p className="text-sm font-medium mb-6 text-primary-green">
              Technologies: React, Node.js, MongoDB, AWS
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold">Situation:</h4>
                <p className="text-gray-600 mt-1">
                  XYZ Retail, an established retail company, sought to expand
                  into e-commerce to reach a wider audience and streamline its
                  sales processes. They needed a scalable, user-friendly
                  platform to support both desktop and mobile users with
                  features like product browsing, user reviews, secure checkout,
                  and real-time inventory updates.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Task:</h4>
                <p className="text-gray-600 mt-1">
                  I was responsible for building the front-end and back-end
                  components of the platform, ensuring seamless integration with
                  the client’s inventory and payment systems. The project goal
                  was to create an efficient, high-performing application with a
                  smooth user experience.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Action:</h4>
                <p className="text-gray-600 mt-1">
                  Using React for the front-end, I designed a responsive,
                  intuitive UI focused on user engagement and easy navigation.
                  On the back end, I developed RESTful APIs with Node.js and
                  MongoDB for data management. Additionally, I integrated the
                  platform with AWS to optimize loading times and set up a CI/CD
                  pipeline for faster deployment and testing. I worked closely
                  with designers and QA to address usability and accessibility
                  standards.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Result:</h4>
                <p className="text-gray-600 mt-1">
                  The project was completed on time, leading to a 35% increase
                  in online sales within the first three months. User feedback
                  highlighted the site's speed and ease of use, and the client
                  reported a substantial reduction in manual inventory
                  management tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
