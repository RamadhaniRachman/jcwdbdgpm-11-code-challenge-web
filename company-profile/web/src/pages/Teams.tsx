import { useEffect, useState } from "react";

// 1. Interface untuk mendefinisikan bentuk data dari API
interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

// Daftar role tiruan karena API randomuser tidak menyediakan data pekerjaan
const mockRoles = [
  "Senior Consultant",
  "Data Analyst",
  "Project Manager",
  "Strategy Director",
  "Technical Lead",
  "UX Strategist",
  "Risk Architect",
  "Change Lead",
];

export default function Teams() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Mengubah result menjadi 8 agar pas dengan grid 4 kolom (2 baris)
    fetch("https://randomuser.me/api/?results=8")
      .then((response) => response.json())
      .then((data) => {
        setTeam(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-global font-display transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-global">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1 bg-background-primary text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                Our Excellence
              </span>
              <h1 className="text-primary text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Meet the minds shaping the{" "}
                <span className="bg-background-primary px-2 rounded-md">
                  future.
                </span>
              </h1>
              <p className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
                Our world-class team of strategic consultants, data analysts,
                and project managers is dedicated to driving your business
                growth through innovation and precision.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-secondary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Overlay warna mint transparan */}
                <div className="absolute inset-0 bg-background-primary/20 mix-blend-overlay z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              The Leadership Team
            </h2>
            <p className="text-secondary mt-2 font-medium">
              Expertise across every industry vertical
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-background-primary"></div>
          </div>
        ) : (
          // Grid Rendering
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col gap-4 p-4 bg-global rounded-xl border-2 border-secondary/10 hover:border-background-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square rounded-lg overflow-hidden relative bg-secondary/5">
                  <img
                    src={member.picture.large}
                    alt={`${member.name.first} ${member.name.last}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Card hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {member.name.first} {member.name.last}
                  </h3>
                  {/* Mengambil peran dari array mockRoles */}
                  <p className="text-primary/70 font-bold text-sm mb-2 uppercase tracking-wide">
                    {mockRoles[index % mockRoles.length]}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed">
                    Passionate professional bringing deep industry expertise and
                    dedication to our global initiatives.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
