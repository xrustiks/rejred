export interface PodcastEpisode {
  slug: string;
  title: string;
  date: string;
  description: string;
  audioUrl: string;
  duration: string;
  thumbnail?: string;
  content?: string;
}

export interface VideoEpisode {
  slug: string;
  title: string;
  date: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
  content?: string;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
}
