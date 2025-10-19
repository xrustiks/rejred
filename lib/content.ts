import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PodcastEpisode, VideoEpisode } from '@/types/podcast';

// This file contains functions to read podcast and video content from the filesystem
const contentDirectory = path.join(process.cwd(), 'content');

export function getEpisodes(): PodcastEpisode[] {
  const episodesDirectory = path.join(contentDirectory, 'episodes');
  
  if (!fs.existsSync(episodesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(episodesDirectory);
  const episodes = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(episodesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        audioUrl: data.audioUrl,
        duration: data.duration,
        thumbnail: data.thumbnail,
        content,
      };
    });

  return episodes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEpisodeBySlug(slug: string): PodcastEpisode | null {
  const episodes = getEpisodes();
  return episodes.find((episode) => episode.slug === slug) || null;
}

export function getVideos(): VideoEpisode[] {
  const videosDirectory = path.join(contentDirectory, 'videos');
  
  if (!fs.existsSync(videosDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(videosDirectory);
  const videos = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(videosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        videoUrl: data.videoUrl,
        thumbnail: data.thumbnail,
        content,
      };
    });

  return videos.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getVideoBySlug(slug: string): VideoEpisode | null {
  const videos = getVideos();
  return videos.find((video) => video.slug === slug) || null;
}
