export default function About() {
  return (
    <div className="bg-global font-display transition-colors duration-300">
      {/* Hero Section */}
      <section className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-2xl min-h-[400px] md:min-h-[500px] relative shadow-2xl"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(7, 18, 19, 0.95), rgba(7, 18, 19, 0.2)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")',
          }}
        >
          <div className="p-8 md:p-16 max-w-3xl relative z-10">
            <span className="bg-background-primary text-primary font-bold tracking-wider uppercase text-xs px-3 py-1 rounded-full mb-4 inline-block">
              Established 2005
            </span>
            <h1 className="text-global text-4xl md:text-5xl font-black leading-tight mt-2">
              Pioneering the Future of{" "}
              <span className="text-background-primary">
                Professional Solutions
              </span>
            </h1>
            <p className="text-global/80 text-lg mt-4 leading-relaxed">
              We empower organizations to reach their full potential through
              strategic innovation and world-class expertise.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="px-4 md:px-10 py-16 md:py-24 bg-global">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-primary text-3xl md:text-4xl font-black tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-secondary text-lg">
              From a small startup in a suburban garage to a global powerhouse
              with operations in 12 countries.
            </p>
          </div>

          <div className="space-y-0">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-[40px_1fr] gap-x-6 md:gap-x-8">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-background-primary shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-xl">
                    rocket_launch
                  </span>
                </div>
                <div className="w-0.5 bg-secondary/20 h-full grow my-2"></div>
              </div>
              <div className="pb-12 pt-1">
                <h3 className="text-primary text-xl font-bold">
                  2005: The Spark
                </h3>
                <p className="text-secondary mt-2 leading-relaxed">
                  ProCorp was founded by three visionaries with a simple goal:
                  to democratize access to high-tier business intelligence. Our
                  first office was a converted basement in Seattle.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-[40px_1fr] gap-x-6 md:gap-x-8">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-background-primary/20 text-primary">
                  <span className="material-symbols-outlined text-xl">
                    public
                  </span>
                </div>
                <div className="w-0.5 bg-secondary/20 h-full grow my-2"></div>
              </div>
              <div className="pb-12 pt-1">
                <h3 className="text-primary text-xl font-bold">
                  2012: Going Global
                </h3>
                <p className="text-secondary mt-2 leading-relaxed">
                  After securing Series B funding, ProCorp expanded its
                  footprint to London and Singapore, marking our transition into
                  an international service provider.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-[40px_1fr] gap-x-6 md:gap-x-8">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-background-primary/20 text-primary">
                  <span className="material-symbols-outlined text-xl">
                    military_tech
                  </span>
                </div>
                <div className="w-0.5 bg-secondary/20 h-full grow my-2"></div>
              </div>
              <div className="pb-12 pt-1">
                <h3 className="text-primary text-xl font-bold">
                  2018: Industry Leadership
                </h3>
                <p className="text-secondary mt-2 leading-relaxed">
                  Recognized as the 'Innovation of the Year' winner by the
                  Global Business Council. We launched our proprietary AI
                  analytics platform, setting a new industry standard.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="grid grid-cols-[40px_1fr] gap-x-6 md:gap-x-8">
              <div className="flex flex-col items-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-background-primary text-primary shadow-lg shadow-background-primary/30">
                  <span className="material-symbols-outlined text-xl">
                    memory
                  </span>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-primary text-xl font-bold">
                  Today: ProCorp 2.0
                </h3>
                <p className="text-secondary mt-2 leading-relaxed">
                  A digital-first strategy focused on sustainable growth and
                  ethical technology integration for over 5,000 enterprise
                  clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-10 py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-black mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              These principles guide every decision we make and every
              partnership we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "handshake",
                title: "Integrity First",
                desc: "We believe in radical transparency and uncompromising ethics in every interaction.",
              },
              {
                icon: "lightbulb",
                title: "Relentless Innovation",
                desc: "Status quo is our only competitor. We constantly push the boundaries of what's possible.",
              },
              {
                icon: "groups",
                title: "Inclusive Growth",
                desc: "We grow when our clients grow. Our success is measured by the value we create for others.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-global p-8 rounded-xl border-2 border-secondary/10 hover:border-background-primary transition-colors shadow-sm hover:shadow-xl group"
              >
                <div className="size-14 bg-background-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-background-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-primary text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Static) */}
      <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto bg-global">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-primary text-3xl md:text-4xl font-black mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-secondary text-lg">
            Guided by experts with decades of experience in global markets.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              role: "Chief Executive Officer",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
              desc: "Former Partner at McKinsey with 20+ years in operational strategy.",
            },
            {
              name: "David Chen",
              role: "Chief Technology Officer",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              desc: "Ex-Google Lead Engineer, holds 15 patents in scalable architecture.",
            },
            {
              name: "Elena Rodriguez",
              role: "Chief Operating Officer",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              desc: "Specializes in global supply chain optimization across 4 continents.",
            },
            {
              name: "Marcus Thorne",
              role: "Chief Financial Officer",
              img: "https://randomuser.me/api/portraits/men/78.jpg",
              desc: "Over 25 years of fiscal management for Fortune 500 companies.",
            },
            // Effect for all leader
          ].map((leader, idx) => (
            <div key={idx} className="group">
              <div className="aspect-4/5 rounded-xl overflow-hidden mb-4 relative bg-secondary/10">
                <img
                  alt={leader.name}
                  src={leader.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"></div>
              </div>
              <h3 className="text-primary text-xl font-bold">{leader.name}</h3>
              <p className="text-background-primary font-bold text-sm mb-2 uppercase tracking-wide">
                {leader.role}
              </p>
              <p className="text-secondary text-sm leading-relaxed">
                {leader.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
