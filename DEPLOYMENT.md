# Bluehost Deployment Guide

## Quick Start

1. **Build your site**
   ```bash
   npm run build
   ```

2. **Upload to Bluehost**
   - All files from the `out/` folder
   - Upload to `public_html` directory

## Detailed Instructions

### Method 1: Using cPanel File Manager (Easiest)

1. **Log into Bluehost**
   - Go to bluehost.com and sign in
   - Navigate to your cPanel

2. **Access File Manager**
   - Find and click "File Manager" in cPanel
   - Navigate to `public_html` (or your domain's folder)

3. **Clear Old Files** (if updating)
   - Select all files in `public_html`
   - Click "Delete"
   - Confirm deletion

4. **Upload New Files**
   - Click "Upload" button
   - Select all files and folders from your `out/` folder
   - Wait for upload to complete

5. **Set Permissions** (if needed)
   - Folders: 755
   - Files: 644

6. **Visit Your Site**
   - Go to your domain
   - Your podcast site should be live!

### Method 2: Using FTP (Recommended for Large Uploads)

1. **Get FTP Credentials**
   - In Bluehost cPanel, go to "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Download FTP Client**
   - FileZilla (free): https://filezilla-project.org
   - Or use any FTP client you prefer

3. **Connect to Your Server**
   - Host: ftp.yourdomain.com
   - Username: your FTP username
   - Password: your FTP password
   - Port: 21

4. **Upload Files**
   - Navigate to `public_html` on remote server
   - Drag and drop all files from your local `out/` folder
   - Wait for transfer to complete

5. **Test Your Site**
   - Visit your domain
   - Check all pages work correctly

## After Deployment Checklist

- ✅ Homepage loads correctly
- ✅ All podcast episodes accessible
- ✅ Videos play properly
- ✅ Images display correctly
- ✅ Navigation works
- ✅ Mobile responsive
- ✅ Audio player works

## Updating Your Site

When you add new podcast episodes or make changes:

1. Edit your MDX files locally
2. Run `npm run build`
3. Upload ONLY changed files, or upload entire `out/` folder
4. Changes go live immediately

## Common Issues & Solutions

### Issue: Blank Page

**Solution:**
- Make sure `index.html` is in the root of `public_html`
- Check browser console for errors
- Clear browser cache

### Issue: 404 Errors

**Solution:**
- Verify all files uploaded correctly
- Check that folder structure is preserved
- Ensure `.html` extensions are present

### Issue: Images Not Loading

**Solution:**
- Verify images are in the correct path
- Check image URLs in your MDX files
- Ensure images uploaded to `public_html/images/`

### Issue: CSS Not Loading

**Solution:**
- Make sure `_next` folder uploaded completely
- Check file permissions (644 for files, 755 for folders)
- Clear browser cache

## File Structure on Bluehost

After upload, your `public_html` should look like:

```
public_html/
├── index.html
├── 404.html
├── about.html
├── podcasts/
│   └── [episode-slug].html
├── videos/
│   └── [video-slug].html
├── photos.html
├── _next/
│   ├── static/
│   └── ...
└── images/
    └── ...
```

## Performance Tips

1. **Enable Compression** in Bluehost cPanel
2. **Use Cloudinary** for large media files
3. **Enable Browser Caching** via .htaccess
4. **Optimize images** before uploading

## Support

- **Bluehost Support**: Available 24/7 via chat/phone
- **Next.js Docs**: https://nextjs.org/docs
- **This Project**: Check README.md for details

---

**Your podcast website is now live! 🎉**
