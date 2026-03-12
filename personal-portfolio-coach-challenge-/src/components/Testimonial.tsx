import jokowi from "../assets/jokowi.png";
import prabowo from "../assets/prabowo.png";

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Client Feedback</h2>
        {/* atur jumlah grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {/* card per pc */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left">
            <p className="italic text-gray-600 mb-6">
              Ramadhani's attention to detail and focus on the user experience
              completely transformed our internal dashboard. The application is
              visibly faster and much easier for our team to navigate.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden flex items-center justify-center">
                <img
                  src={jokowi}
                  alt="jokowi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Jokowi</h4>
                <p className="text-sm text-gray-500">Former President</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-gray-100 text-left">
            <p className="italic text-gray-600 mb-6">
              "Excellent communication and highly reliable. Delivered the
              project ahead of schedule and took the time to explain the
              architecture to our internal team."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden flex items-center justify-center">
                <img
                  src={prabowo}
                  alt="prabowo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Prabowo</h4>
                <p className="text-sm text-gray-500">President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
