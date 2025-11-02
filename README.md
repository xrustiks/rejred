# The Rejected Pre-Med Podcast Website

A modern podcast website built with Next.js, featuring audio podcasts, video content, and photo galleries. Optimized for static export and deployment to Bluehost.

## 🚀 Features

- ✅ **Audio Podcasts** - Custom audio player with controls
- ✅ **Video Podcasts** - YouTube/Vimeo video embedding
- ✅ **Photo Gallery** - Showcase behind-the-scenes photos
- ✅ **MDX Content** - Easy content management with Markdown
- ✅ **Responsive Design** - Mobile-friendly with Tailwind CSS
- ✅ **Static Export** - Optimized for Bluehost hosting
- ✅ **SEO Friendly** - Proper meta tags and structure
- ✅ **Fast Performance** - Optimized build and assets

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + React)
- **Media**: Cloudinary (recommended for hosting)
- **Deployment**: Static export for Bluehost

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Building for Production

```bash
# Build static site for Bluehost
npm run build
```

This creates an `out/` folder ready for upload to Bluehost.

## 📝 Adding Content

### Create a New Podcast Episode

Create a file in `content/episodes/my-episode.mdx`:

```mdx
---
title: "Your Episode Title"
date: "2025-10-18"
description: "Episode description"
audioUrl: "https://your-audio-url.mp3"
duration: "45:30"
thumbnail: "/images/thumb.jpg"
---

Your show notes here in Markdown format.
```

### Create a New Video

Create a file in `content/videos/my-video.mdx`:

```mdx
---
title: "Video Title"
date: "2025-10-18"
description: "Video description"
videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID"
---

Video description here.
```

## 🌐 Deploying to Bluehost

1. **Build**: Run `npm run build`
2. **Upload**: Upload contents of `out/` folder to your Bluehost `public_html` via:
   - cPanel File Manager, or
   - FTP client (FileZilla, etc.)
3. **Done**: Visit your domain!

## 📁 Project Structure

```
The Rejected Pre-Med/
├── app/              # Pages and routes
├── components/       # React components
├── content/          # Your podcast/video MDX files
├── lib/              # Utility functions
├── public/           # Static assets (images)
└── out/              # Built static site (after npm run build)
```

## 🎨 Customization

- **Site Info**: Edit `app/layout.tsx`
- **Navigation**: Edit `components/Header.tsx`
- **Colors**: Modify Tailwind classes in components
- **Footer**: Edit `components/Footer.tsx`

## 💡 Media Hosting

- **Audio**: Use Cloudinary (free 25GB/month) or Anchor.fm (free unlimited)
- **Video**: Upload to YouTube/Vimeo
- **Images**: Small images in `/public/images/`, large ones on Cloudinary

## 🔄 Update Workflow

1. Add/edit MDX files in `content/`
2. Run `npm run build`
3. Upload `out/` folder to Bluehost
4. Changes are live!

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [Cloudinary](https://cloudinary.com)

---

**Ready to share your voice with the world! 🎙️**
