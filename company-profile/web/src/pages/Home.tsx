import { Link } from "react-router-dom";

export default function Home() {
  return (
    // Menggunakan warna background global (putih) dan teks utama primary (hitam)
    <div className="bg-global font-display text-primary transition-colors duration-300">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* Badge menggunakan background hijau mint agar mencolok */}
              <span className="w-fit rounded-full bg-background-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Strategic Innovation
              </span>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-primary md:text-6xl">
                Empowering Businesses with{" "}
                {/* Teks di-highlight menggunakan background mint agar kontras dan unik */}
                <span className="bg-background-primary px-2 rounded-md">
                  Professional Excellence
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-secondary">
                ProCorp delivers innovative solutions to help your company
                scale, optimize operations, and thrive in an increasingly
                competitive global landscape.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-lg bg-background-primary px-8 py-4 text-sm font-bold text-primary shadow-lg shadow-background-primary/30 hover:scale-105 transition-transform"
              >
                Get Started Today
              </a>
              <button className="rounded-lg border-2 border-primary px-8 py-4 text-sm font-bold text-primary hover:bg-background-primary/20 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
            <div className="absolute inset-0 bg-background-primary/20 mix-blend-overlay"></div>
            <img
              alt="Modern glass office skyscraper"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      {/* Background hijau mint transparan untuk pemisah section */}
      <section className="bg-background-primary/10 py-20" id="about">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Company Overview
            </h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-background-primary"></div>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-loose text-secondary">
              ProCorp is a leading consultancy firm dedicated to operational
              efficiency and strategic growth. With over two decades of
              experience, we provide the insights needed for sustainable
              success. Our multidisciplinary team works closely with founders
              and executives to navigate complex market dynamics and implement
              high-impact strategies.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-primary">20+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-primary">500+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Clients Worldwide
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-primary">98%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Client Retention
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-primary">15</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Global Offices
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-global" id="services">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Our Services
              </h2>
              <p className="max-w-md text-secondary">
                Tailored solutions designed to meet the unique challenges of
                your industry.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 flex items-center gap-2 text-sm font-bold text-primary md:mt-0 hover:text-secondary transition-colors"
            >
              Explore all services{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Strategic Planning",
                icon: "insights",
                desc: "Long-term roadmaps designed to scale operations and maximize market presence.",
              },
              {
                title: "Financial Advisory",
                icon: "account_balance",
                desc: "Expert guidance on capital allocation, risk management, and fiscal efficiency.",
              },
              {
                title: "Operational Excellence",
                icon: "precision_manufacturing",
                desc: "Optimizing workflows and supply chains to reduce waste and boost productivity.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group rounded-xl border-2 border-secondary/10 bg-global p-8 transition-all hover:border-background-primary hover:shadow-xl"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-lg bg-background-primary/20 text-primary group-hover:bg-background-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="text-secondary">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Menggunakan background gelap pekat (primary) agar eksklusif */}
      <section className="bg-primary py-24 text-global" id="testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Client Success Stories
            </h2>
            {/* Teks hijau mint terlihat sangat cantik di atas background hitam */}
            <p className="mt-4 text-background-primary font-medium tracking-wide">
              Real feedback from leaders who trust ProCorp
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-6 rounded-2xl bg-secondary/20 p-10 backdrop-blur-sm border border-secondary/30">
              <span className="material-symbols-outlined text-4xl text-background-primary/80">
                format_quote
              </span>
              <p className="text-xl italic leading-relaxed text-global/90">
                "ProCorp's strategic intervention was the turning point for our
                expansion. Their team didn't just provide a report; they
                provided a roadmap for our future."
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full bg-cover bg-center border-2 border-background-primary"
                  style={{
                    backgroundImage:
                      'url("https://randomuser.me/api/portraits/women/44.jpg")',
                  }}
                ></div>
                <div>
                  <h4 className="font-bold">Sarah Jenkins</h4>
                  <p className="text-sm text-background-primary/80">
                    CEO, NexaGrowth Tech
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col gap-6 rounded-2xl bg-secondary/20 p-10 backdrop-blur-sm border border-secondary/30">
              <span className="material-symbols-outlined text-4xl text-background-primary/80">
                format_quote
              </span>
              <p className="text-xl italic leading-relaxed text-global/90">
                "The level of professionalism and industry insight provided by
                ProCorp is unmatched. They helped us navigate a complex merger
                with absolute precision."
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full bg-cover bg-center border-2 border-background-primary"
                  style={{
                    backgroundImage:
                      'url("https://randomuser.me/api/portraits/men/32.jpg")',
                  }}
                ></div>
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-sm text-background-primary/80">
                    Director of Operations, Global Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-primary p-12 text-center text-global shadow-2xl relative overflow-hidden">
          {/* Efek glow di belakang CTA */}
          <div className="absolute -top-24 -right-24 size-64 bg-background-primary/20 blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-background-primary md:text-4xl">
              Ready to Scale Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-global/80">
              Join 500+ successful companies that have partnered with ProCorp
              for strategic excellence.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <input
                className="min-w-75 rounded-lg border border-secondary/50 bg-secondary/20 px-6 py-4 text-global placeholder-global/50 focus:border-background-primary focus:ring-1 focus:ring-background-primary outline-none"
                placeholder="Enter your business email"
                type="email"
              />
              <button className="rounded-lg bg-background-primary px-10 py-4 font-bold text-primary transition-transform hover:scale-105">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
