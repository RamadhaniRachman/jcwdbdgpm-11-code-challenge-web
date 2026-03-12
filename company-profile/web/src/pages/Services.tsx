import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-global font-display transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-global text-4xl md:text-6xl font-black tracking-tight mb-6">
            Comprehensive{" "}
            <span className="text-background-primary">Strategic Solutions</span>
          </h1>
          <p className="text-global/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering businesses with data-driven strategies to drive
            sustainable growth and innovation in a rapidly evolving global
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#expertise"
              className="inline-flex items-center justify-center bg-background-primary text-primary h-12 px-8 rounded-lg font-bold text-lg hover:scale-105 shadow-lg shadow-background-primary/20 transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="#testimoni"
              className="inline-flex items-center justify-center bg-global/10 backdrop-blur-md text-global border-2 border-global/30 h-12 px-8 rounded-lg font-bold text-lg hover:bg-global/20 hover:border-global/50 transition-all duration-300"
            >
              View Testimoni
            </a>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section
        id="expertise"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-primary mb-4">
            Our Expertise
          </h2>
          <div className="h-1.5 w-20 bg-background-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "insights",
              title: "Strategic Consulting",
              desc: "Navigate complex market dynamics with data-driven strategies designed for long-term scalability and market leadership.",
            },
            {
              icon: "cloud_sync",
              title: "Digital Transformation",
              desc: "Accelerate growth through cloud-native solutions, enterprise automation, and modernization of your existing legacy workflows.",
            },
            {
              icon: "account_balance",
              title: "Financial Advisory",
              desc: "Expertise in capital structure, asset management, and comprehensive risk mitigation to secure your organization's financial future.",
            },
            {
              icon: "settings_suggest",
              title: "Operations Management",
              desc: "Enhancing operational efficiency and supply chain optimization to achieve seamless scale and reduce overhead costs.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl border-2 border-secondary/10 bg-global hover:shadow-xl hover:-translate-y-1 hover:border-background-primary transition-all duration-300"
            >
              <div className="w-14 h-14 bg-background-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-background-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section
        id="testimoni"
        className="py-20 bg-secondary/5 border-y border-secondary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black text-primary mb-4">
                Client Success Stories
              </h2>
              <p className="text-secondary font-medium">
                See how our strategic interventions have transformed global
                enterprises and emerging startups alike.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "David Chen",
                role: "CTO, NexGen Logistics",
                quote:
                  '"The digital transformation roadmap provided by ProCorp reduced our operational costs by 35% in the first year alone. Truly world-class."',
              },
              {
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Sarah Jenkins",
                role: "CEO, FinTech Solutions",
                quote:
                  '"Their financial advisory team helped us navigate a complex Series C round. We couldn\'t have asked for a more professional partner."',
              },
              {
                img: "https://randomuser.me/api/portraits/men/78.jpg",
                name: "Marcus Thorne",
                role: "COO, Global Manufacturing",
                quote:
                  '"The operations overhaul was seamless. ProCorp understood our unique challenges and delivered a scalable model that works."',
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="bg-global p-8 rounded-xl shadow-sm border border-secondary/10 hover:border-background-primary hover:shadow-lg transition-all"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-primary italic mb-8 font-medium leading-relaxed">
                  {testi.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="size-12 rounded-full bg-secondary/20 overflow-hidden border-2 border-background-primary">
                    <img
                      src={testi.img}
                      alt={testi.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testi.name}</h4>
                    <p className="text-xs text-secondary font-bold uppercase tracking-wider mt-1">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-primary mb-4">
            Pricing & Packages
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Choose the consultation level that matches your current business
            stage and long-term objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Startup */}
          <div className="flex flex-col p-8 rounded-2xl border-2 border-secondary/10 bg-global hover:border-secondary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-2">Startup</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-primary">$4,999</span>
              <span className="text-secondary text-sm font-medium">/month</span>
            </div>
            <p className="text-sm text-secondary mb-8 h-10">
              Perfect for early-stage companies looking for structural
              foundations.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Quarterly Strategy Review",
                "Market Analysis Reports",
                "Digital Audit & Recommendations",
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-primary font-medium"
                >
                  <span className="material-symbols-outlined text-background-primary text-xl">
                    check_circle
                  </span>{" "}
                  {feature}
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-secondary/50 line-through">
                <span className="material-symbols-outlined text-secondary/30 text-xl">
                  cancel
                </span>{" "}
                Dedicated Account Manager
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-global transition-colors">
              Get Started
            </button>
          </div>

          {/* Growth (Most Popular) */}
          <div className="flex flex-col p-8 rounded-2xl border-4 border-background-primary bg-primary relative transform md:-translate-y-4 shadow-2xl shadow-background-primary/20">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background-primary text-primary text-[11px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-global mb-2">Growth</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-background-primary">
                $9,999
              </span>
              <span className="text-global/60 text-sm font-medium">/month</span>
            </div>
            <p className="text-sm text-global/80 mb-8 h-10">
              Accelerated scaling for mid-market businesses seeking expansion.
            </p>
            <ul className="space-y-4 mb-10 grow">
              {[
                "Monthly Strategy Sessions",
                "Automation Implementation",
                "Risk Management Framework",
                "Dedicated Project Lead",
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-global font-medium"
                >
                  <span className="material-symbols-outlined text-background-primary text-xl">
                    check_circle
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 bg-background-primary text-primary font-bold rounded-lg hover:bg-background-primary/90 hover:scale-[1.02] transition-all">
              Choose Growth
            </button>
          </div>

          {/* Enterprise */}
          <div className="flex flex-col p-8 rounded-2xl border-2 border-secondary/10 bg-global hover:border-secondary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-primary">Custom</span>
            </div>
            <p className="text-sm text-secondary mb-8 h-10">
              Bespoke solutions for global organizations with complex needs.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Full-time On-site Consulting",
                "Custom Tech Integration",
                "Supply Chain Overhaul",
                "24/7 Global Priority Support",
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-primary font-medium"
                >
                  <span className="material-symbols-outlined text-background-primary text-xl">
                    check_circle
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-global transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
