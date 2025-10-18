import Link from "next/link";
import { getEpisodes } from "@/lib/content";

export default function PodcastsPage() {
  const episodes = getEpisodes();

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">All Podcast Episodes</h1>
      <p className="text-gray-600 mb-8 sm:mb-12">
        Listen to all our podcast episodes. New episodes released weekly!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {episodes.map((episode) => (
          <Link
            key={episode.slug}
            href={`/podcasts/${episode.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 flex items-center justify-center" style={{ background: `linear-gradient(135deg, var(--primary), #7c3aed)` }}>
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-xl mb-2">{episode.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {episode.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{new Date(episode.date).toLocaleDateString()}</span>
                <span>{episode.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {episodes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No episodes yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
