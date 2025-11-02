# Content Creation Guide

This guide will help you create and manage podcast episodes, videos, and photos for your The Rejected Pre-Med Podcast website.

## 📝 Creating Podcast Episodes

### Step 1: Prepare Your Audio

1. **Record your podcast**
2. **Edit the audio** (remove background noise, add intro/outro music)
3. **Export as MP3** (recommended: 128kbps or higher)

### Step 2: Upload Audio to Cloudinary

**Option A: Cloudinary (Recommended)**

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Click "Media Library" → "Upload"
3. Upload your MP3 file
4. Right-click the file → "Copy URL"
5. Save this URL for your MDX file

**Option B: Podcast Hosting Service**

Use services like:
- **Anchor.fm** (Free, unlimited)
- **Buzzsprout** (Free tier available)
- **Podbean**

### Step 3: Create Episode File

1. Go to `content/episodes/` folder
2. Create new file: `episode-3-my-topic.mdx`
3. Use this template:

```mdx
---
title: "Episode 3: Your Amazing Topic"
date: "2025-10-18"
description: "A compelling description that makes people want to listen. Keep it under 160 characters for SEO."
audioUrl: "https://res.cloudinary.com/your-cloud/video/upload/episode-3.mp3"
duration: "45:30"
thumbnail: "/images/episode-3-thumb.jpg"
---

## Episode Summary

Write a detailed summary of your episode here. Use Markdown formatting.

### In This Episode

- Topic 1: Brief description
- Topic 2: Brief description
- Topic 3: Brief description

### Guest Information

**Guest Name** - Guest Title

Guest bio and why they're on the show.

### Show Notes

- [00:00] Introduction
- [05:30] Topic 1 discussion
- [15:45] Topic 2 deep dive
- [30:00] Guest Q&A
- [42:00] Closing thoughts

### Resources Mentioned

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)
- [Book/Article Title](https://example.com)

### Connect With Our Guest

- Website: [guestwebsite.com](https://guestwebsite.com)
- Twitter: [@guesthandle](https://twitter.com/guesthandle)
- Instagram: [@guesthandle](https://instagram.com/guesthandle)

### Subscribe

- [Apple Podcasts](https://podcasts.apple.com/your-show)
- [Spotify](https://open.spotify.com/show/your-show)
- [RSS Feed](https://yoursite.com/rss)

---

*If you enjoyed this episode, please leave us a review and share with a friend!*
```

### Step 4: Add Episode Thumbnail (Optional)

1. Create a square image (1400x1400px recommended)
2. Save as `episode-3-thumb.jpg`
3. Place in `public/images/`
4. Reference in your MDX frontmatter

### Step 5: Preview

```bash
npm run dev
```

Visit `http://localhost:3000/podcasts` to see your new episode!

## 🎥 Creating Video Content

### Step 1: Upload Video

1. Upload to **YouTube** or **Vimeo**
2. Copy the video URL
   - YouTube: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Vimeo: `https://vimeo.com/VIDEO_ID`

### Step 2: Create Video File

Create `content/videos/my-video.mdx`:

```mdx
---
title: "Behind the Scenes: Our Recording Process"
date: "2025-10-18"
description: "Take a tour of our podcast studio and see how we create episodes."
videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
thumbnail: "/images/video-thumb.jpg"
---

## Video Description

Detailed description of your video content.

### What You'll See

- Studio setup
- Equipment walkthrough
- Recording process
- Editing workflow

### Equipment Featured

- Microphone: [Shure SM7B](https://example.com)
- Audio Interface: [Focusrite Scarlett](https://example.com)
- Recording Software: [Your DAW](https://example.com)
```

## 📸 Managing Photos

### Step 1: Prepare Images

1. **Resize images** (max 2000px wide)
2. **Compress images** using:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
3. **Name files descriptively**: `studio-setup-2025.jpg`

### Step 2: Add Photos

**For Small Images** (< 500KB):
- Place in `public/images/`

**For Large Images**:
- Upload to Cloudinary
- Use URL in your code

### Step 3: Update Photos Page

Edit `app/photos/page.tsx` and add your photos to the array:

```tsx
const photos = [
  { 
    id: 1, 
    title: "Studio Setup", 
    url: "/images/studio-setup.jpg" 
  },
  { 
    id: 2, 
    title: "Live Recording", 
    url: "https://res.cloudinary.com/your-cloud/image/upload/live-recording.jpg" 
  },
  // Add more photos...
];
```

## ✏️ Markdown Formatting Tips

### Headings

```markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
```

### Lists

```markdown
- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Another item
```

### Links

```markdown
[Link text](https://example.com)
```

### Bold & Italic

```markdown
**bold text**
*italic text*
***bold and italic***
```

### Code

```markdown
`inline code`

\`\`\`javascript
// Code block
const hello = "world";
\`\`\`
```

### Quotes

```markdown
> This is a quote
> It can span multiple lines
```

## 📅 Publishing Schedule

### Weekly Podcast Workflow

**Monday:**
- Record episode
- Upload to Cloudinary

**Tuesday:**
- Edit audio
- Create show notes
- Create MDX file

**Wednesday:**
- Review and test locally
- Build site: `npm run build`

**Thursday:**
- Upload to Bluehost
- Announce on social media

## 🎯 SEO Best Practices

### Episode Titles
- Keep under 60 characters
- Include keywords
- Make it compelling

### Descriptions
- First 160 characters appear in search results
- Include main topic/guest
- Add relevant keywords naturally

### Show Notes
- Use headings (H2, H3)
- Link to relevant resources
- Include timestamps
- Add guest bios with links

## 📊 Episode Checklist

Before publishing an episode:

- [ ] Audio file uploaded and URL copied
- [ ] Thumbnail image created and uploaded
- [ ] MDX file created with all metadata
- [ ] Show notes written with timestamps
- [ ] Guest bio and links added
- [ ] Resources linked
- [ ] Spell-checked content
- [ ] Preview in development mode
- [ ] Build successful (`npm run build`)
- [ ] Uploaded to Bluehost
- [ ] Tested live on website
- [ ] Shared on social media

## 💡 Content Ideas

### Episode Topics
- Interviews with experts
- Deep dives into specific topics
- Q&A episodes
- Behind-the-scenes stories
- Listener questions
- Industry news and trends

### Video Content
- Studio tours
- Equipment reviews
- Recording tips
- Editing tutorials
- Guest interviews (video version)
- Day-in-the-life content

### Photo Gallery
- Event photos
- Guest photos
- Behind-the-scenes
- Equipment photos
- Team photos
- Fan meetups

## 🚀 Quick Reference

### File Naming
- Episodes: `episode-NUMBER-topic-name.mdx`
- Videos: `video-topic-name.mdx`
- Images: `descriptive-name.jpg`

### Frontmatter Fields

**Required for Episodes:**
- `title`
- `date`
- `description`
- `audioUrl`
- `duration`

**Optional:**
- `thumbnail`

**Required for Videos:**
- `title`
- `date`
- `description`
- `videoUrl`

---

**Happy Creating! 🎙️**
