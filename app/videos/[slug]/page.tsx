import { getVideos, getVideoBySlug } from "@/lib/content";
import VideoPlayer from "@/components/VideoPlayer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const videos = getVideos();
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function VideoPage({ params }: PageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{video.title}</h1>
        <div className="text-gray-600 mb-4 sm:mb-6">
          {new Date(video.date).toLocaleDateString()}
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">{video.description}</p>
      </div>

      <div className="mb-12">
        <VideoPlayer videoUrl={video.videoUrl} title={video.title} />
      </div>

      <div className="prose prose-lg max-w-none">
        {video.content && (
          <div dangerouslySetInnerHTML={{ __html: video.content }} />
        )}
      </div>
    </div>
  );
}
