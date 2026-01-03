import { FocusCards } from "@/components/ui/focus-cards";

const githubProfileLink = "https://github.com/Juwonthefirst/";
export function WorksSection() {
  const projects = [
    {
      title: "Beep",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      category: "Chat platform",
      description: "A real-time chat platform with built in call features.",
      link: githubProfileLink + "beep",
    },
    {
      title: "JBA ventures",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      category: "Real Estate E-commerce platform",
      description:
        "An E-commerce platform for agents to advertise their real estate properties.",
      link: githubProfileLink + "JBA_ventures",
    },
    {
      title: "Vite Games",
      src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2340&auto=format&fit=crop",
      category: "Game Store",
      description:
        "An E-commerce platform for selling games, featuring an attention grabbing landing page.",
      link: githubProfileLink + "game-store",
    },
    {
      title: "StratoVault",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2532&auto=format&fit=crop",
      category: "File Storage Platform",
      description: "A website for storing and sharing files.",
      link: githubProfileLink + "File-upload",
    },
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              A curated selection of projects that showcase my expertise in
              creating exceptional digital experiences.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={projects} />

        {/* View all link */}
        {/* <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-nohemi text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}
