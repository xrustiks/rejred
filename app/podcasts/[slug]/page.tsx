import { getEpisodes, getEpisodeBySlug } from "@/lib/content";
import AudioPlayer from "@/components/AudioPlayer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const episodes = getEpisodes();
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{episode.title}</h1>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-600 mb-4 sm:mb-6">
          <span>{new Date(episode.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{episode.duration}</span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">{episode.description}</p>
      </div>

      <div className="mb-12">
        <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
      </div>

      <div className="prose prose-lg max-w-none">
        {episode.content && (
          <div dangerouslySetInnerHTML={{ __html: episode.content }} />
        )}
      </div>
    </div>
  );
}
