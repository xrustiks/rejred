import Link from "next/link";
import { getVideos } from "@/lib/content";

export default function VideosPage() {
  const videos = getVideos();

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">All Video Episodes</h1>
      <p className="text-gray-600 mb-8 sm:mb-12">
        Watch all our video content. Subscribe for more!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {videos.map((video) => (
          <Link
            key={video.slug}
            href={`/videos/${video.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video flex items-center justify-center" style={{ background: `linear-gradient(135deg, #ef4444, var(--primary))` }}>
              <svg
                className="w-20 h-20 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-xl mb-2">{video.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {video.description}
              </p>
              <div className="text-sm text-gray-500">
                {new Date(video.date).toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {videos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No videos yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
