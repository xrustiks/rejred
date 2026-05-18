import Link from "next/link";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import HiddenUntilScroll from "@/components/HiddenUntilScroll";

const featuredItems = [
  {
    label: "Podcast",
    href: "/podcasts",
    description: "Listen to episodes and subscribe via RSS",
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6zm-1 3v6l5-3-5-3z" />,
  },
  {
    label: "Media",
    href: "/media",
    description: "Photos and videos on Instagram",
    icon: <path d="M12 2C7.58 2 4 5.58 4 10v4c0 4.42 3.58 8 8 8s8-3.58 8-8v-4C20 5.58 16.42 2 12 2zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />,
  },
  {
    label: "Support",
    href: "/support",
    description: "Help support the mission",
    icon: <path d="M3 8h14a4 4 0 1 1 0 8H3V8zm14 6a2 2 0 1 0 0-4H5v4h12zM3 18h14v2H3v-2z" />,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_35%),linear-gradient(180deg,_#ecfeff_0%,_#ffffff_34%,_#f8fbff_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.95),_transparent_38%),radial-gradient(circle_at_80%_10%,_rgba(125,211,252,0.45),_transparent_28%)] opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-96 bg-[radial-gradient(circle,_rgba(14,165,233,0.08),_transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <FadeInOnScroll>
          <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  Mental wellness • resilience • growth
                </div>

                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  <span className="block">The Rejected Pre-Med</span>
                  <span className="mt-2 block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                    Podcast
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Join conversations about resilience, mental wellness, and growth through rejection
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/podcasts"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-950/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Listen Now
                  </Link>
                  <Link
                    href="/media"
                    className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/90 px-7 py-3.5 text-base font-semibold text-sky-900 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
                  >
                    Watch & Explore
                  </Link>
                </div>

                <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {[
                    ["Speaking", "Neuroscience-backed stories"],
                    ["Research & Wellbeing", "Evidence-based mental health insights"],
                    ["Media", "Audio, video and resources"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                      <div className="text-sm font-semibold text-slate-900">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200/40 via-white/40 to-cyan-200/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 shadow-[0_30px_90px_rgba(2,8,23,0.18)]">
                  <div className="aspect-[4/5] w-full bg-cover bg-center" style={{ backgroundImage: "url(/images/reachouttogether.jpeg)" }} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                    <div className="text-sm uppercase tracking-[0.35em] text-white/70">Meet Valeria Rusnak</div>
                    <div className="mt-2 text-xl font-semibold">Speaker, Host & Mental Health Advocate</div>
                    <div className="mt-3 text-sm leading-6 text-white/80">Conversations shaped to help people turn rejection into direction.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInOnScroll>

        <HiddenUntilScroll>
          <FadeInOnScroll delay={220}>
            <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
                <div className="mb-4 inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">About Valeria Rusnak</div>

                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Speaker, Host & Mental Health Advocate</h2>

                <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                  <p>
                    Valeria is available to collaborate as a Rejection and Resilience Speaker. She brings an academic foundation in neuroscience, Community Helpers training and is currently completing her Master of Management at the University of Calgary.
                  </p>

                  <p>
                    If you are looking for a dynamic and thoughtful speaker whose delivery has been described as engaging, authentic, and impactful, and who consistently receives positive feedback from audiences, Valeria would be honored to collaborate.
                    How do we build confidence when facing rejection? How do we become resilient in moments that challenge our identity, direction, or self-worth? These are not topics commonly taught in school curriculums — yet they are experiences nearly everyone will face.
                    Whether speaking to a health and wellness class, a student leadership initiative, or your organization, Valeria shares research-informed insights paired with lived experience and practical tools.
                    Rejection can feel deeply personal — but it can also be redirection. It can be an invitation to reflect, recalibrate, and grow — if we are willing to see it that way.
                    For speaking inquiries and collaborations, please contact Valeria.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/about" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5">More about the author</Link>
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600">Available for speaking, consulting, and collaboration</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                  <div className="bg-slate-950 px-6 py-5 text-white">
                    <div className="text-sm uppercase tracking-[0.3em] text-white/60">Recent Speaking Venues</div>
                  </div>
                  <div className="grid gap-3 p-6 sm:grid-cols-2">
                    {[
                      "University of Calgary",
                      "University of Lethbridge",
                      "Foothills school division and Calgary Board of Education member schools",
                      "General Mills",
                    ].map((venue) => (
                      <div key={venue} className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-4 text-sm leading-6 text-slate-700">
                        <span className="mr-2 text-sky-600">•</span>
                        {venue}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Featured In</div>
                  <p className="mt-4 text-lg leading-8 text-slate-700">
                    <span className="font-semibold text-slate-900">The Western Wheel Newspaper</span> •
                    <span className="font-semibold text-slate-900"> The Okotoks Radio 100.9</span> •
                    <span className="font-semibold text-slate-900"> The Tactical Empathy Podcast</span> •
                    <span className="font-semibold text-slate-900"> North Okotoks Living Magazine</span> •
                    <span className="font-semibold text-slate-900"> Everything Storytelling & Mental Health Podcast</span> •
                    <span className="font-semibold text-slate-900"> University of Toronto CPD</span> •
                    <span className="font-semibold text-slate-900"> Golden Key Academy</span>
                  </p>
                </div>
              </div>
            </section>
          </FadeInOnScroll>
        </HiddenUntilScroll>

        <HiddenUntilScroll>
          <FadeInOnScroll delay={320}>
            <section className="mt-8">
              <div className="mb-6 flex items-end justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Explore More</div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">More ways to connect with the project</h2>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {featuredItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                  >
                    <div className={`h-40 flex items-center justify-center bg-gradient-to-br ${index === 0 ? "from-sky-600 via-cyan-500 to-sky-400" : index === 1 ? "from-cyan-600 via-sky-500 to-blue-400" : "from-blue-600 via-sky-500 to-cyan-400"}`}>
                      <svg className="h-16 w-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        {item.icon}
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-950 transition-colors group-hover:text-sky-700">{item.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </FadeInOnScroll>
        </HiddenUntilScroll>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-80 scroll-fade-overlay pointer-events-none" />
    </div>
  );
}
