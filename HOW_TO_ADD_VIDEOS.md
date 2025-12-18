# How to Add Local Videos to Your Website

## Quick Start Guide

Your website is now configured to use **local video files** instead of YouTube embeds. This gives you full control over video content and works offline.

## Video Directory Structure Created:

```
videos/
├── driving/         ✅ Created
├── walking/         ✅ Created  
├── safety/          ✅ Created
├── health/          (create this)
├── food/            (create this)
├── environment/     (create this)
├── money/           (create this)
└── transport/       (create this)
```

## Step-by-Step: Adding Your First Video

### 1. **Get or Create a Video**
You have several options:

#### Option A: Record Your Own
- Use your smartphone camera
- Use screen recording (OBS Studio, etc.)
- Duration: 30 seconds to 2 minutes

#### Option B: Create Animations
- **Canva** (easiest): https://www.canva.com
  - Use "Video" templates
  - Add text overlays in English & Hindi
  - Download as MP4

- **PowerPoint/Google Slides**
  - Create slides with tips
  - Add animations
  - Export as video (File → Export → Create Video)

#### Option C: Use Stock Videos (Free)
- Pexels: https://www.pexels.com/videos/
- Pixabay: https://pixabay.com/videos/
- Videvo: https://www.videvo.net/

### 2. **Optimize Your Video**
Use **HandBrake** (free tool) to optimize:
- Download: https://handbrake.fr/
- Settings:
  - Format: MP4
  - Codec: H.264
  - Resolution: 720p (1280x720)
  - Framerate: 30fps
  - Quality: 22-24 RF
  - Target size: Under 20MB

### 3. **Name Your Video File**
Use clear, descriptive names:
- ✅ Good: `seatbelt.mp4`, `traffic-signals.mp4`
- ❌ Bad: `video1.mp4`, `VID_20231205.mp4`

### 4. **Place Video in Correct Folder**
Copy your video to the appropriate directory:
```
videos/driving/seatbelt.mp4
videos/walking/look-both-ways.mp4
videos/safety/personal-safety.mp4
```

### 5. **Video is Automatically Available!**
The website will automatically:
- Show a play button on that list item
- Play the video when clicked
- Display in a professional modal

## Current Video Configuration

The `data.js` file is already configured with paths like:
```javascript
{
  text: 'Always wear seat belts...', 
  video: 'videos/driving/seatbelt.mp4'
}
```

### If Video Doesn't Exist Yet:
- The item will still show (without play button)
- No errors will occur
- Add the video file when ready

### To Disable a Video:
Change the video path to `null`:
```javascript
{text: 'Some tip', video: null}
```

## Creating Simple Educational Videos

### Easy Method with Canva (Recommended for beginners):

1. Go to Canva.com (free account)
2. Search for "Educational Video" templates
3. Choose a 16:9 aspect ratio template
4. Add your content:
   - Title slide with the tip
   - Visual demonstration or image
   - Text in English
   - Text in Hindi
5. Keep it under 60 seconds
6. Download as MP4
7. Place in videos folder

### Example Structure for a Video:
- **0-5 seconds**: Show the tip text
- **5-30 seconds**: Visual demonstration
- **30-40 seconds**: Show correct vs incorrect
- **40-45 seconds**: Summary

## Video Specifications

### Recommended:
- **Format**: MP4 (H.264)
- **Resolution**: 1280x720 (720p)
- **Aspect Ratio**: 16:9
- **Duration**: 30-120 seconds
- **File Size**: Under 20MB
- **Audio**: Optional (add background music or narration)

### Supported:
- MP4, WebM
- The website tries MP4 first, then WebM as fallback

## Testing Your Videos

1. Place video file in correct folder
2. Open `index.html` in browser
3. Navigate to the relevant category
4. Hover over the list item
5. Click the play button
6. Video should open in modal and play

## Troubleshooting

### Video doesn't show/play:
- ✅ Check file path is correct
- ✅ Check file extension is `.mp4`
- ✅ Check file isn't corrupted
- ✅ Try different browser (Chrome recommended)
- ✅ Check browser console for errors (F12)

### Video is too large:
- Use HandBrake to compress
- Lower resolution to 480p or 720p
- Reduce quality slider in HandBrake

### Video format not supported:
- Convert to MP4 using:
  - HandBrake (free)
  - Online converter: CloudConvert.com
  - VLC Media Player (File → Convert)

## Tips for Quality Content

1. **Keep it short** - 30-60 seconds ideal
2. **Focus on one tip** - Don't combine multiple tips
3. **Show, don't just tell** - Visual demonstrations work best
4. **Add text overlays** - Make it accessible without sound
5. **Use both languages** - English & Hindi text when possible
6. **Good lighting** - If recording real scenes
7. **Stable shots** - Use tripod or stabilization
8. **Clear audio** - If adding narration

## Free Video Editing Tools

- **Mobile**:
  - InShot (Android/iOS)
  - CapCut (Android/iOS)
  - KineMaster (Android/iOS)

- **Desktop**:
  - DaVinci Resolve (Free, professional)
  - Shotcut (Free, simple)
  - OpenShot (Free, easy to learn)

- **Online**:
  - Canva (easiest!)
  - Clipchamp
  - Kapwing

## Need Help?

Check the `videos/README.md` file for more detailed information about video organization and specifications.

Happy video creating! 🎥
