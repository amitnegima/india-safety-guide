# Video Files Directory Structure

This folder contains all local video files for the Do's and Don'ts website.

## Directory Structure

```
videos/
├── driving/           # Car and two-wheeler driving videos
│   ├── car-driving-overview.mp4
│   ├── seatbelt.mp4
│   ├── traffic-signals.mp4
│   ├── safe-distance.mp4
│   ├── indicators.mp4
│   ├── speed-limit.mp4
│   ├── mirrors.mp4
│   ├── monsoon.mp4
│   ├── no-drink-drive.mp4
│   ├── no-mobile.mp4
│   ├── no-left-overtake.mp4
│   ├── no-drowsy.mp4
│   └── no-road-rage.mp4
│
├── walking/           # Pedestrian safety videos
│
├── safety/            # Personal and cyber safety videos
│
├── health/            # Health and hygiene videos
│
├── food/              # Food safety videos
│
├── environment/       # Environmental responsibility videos
│
└── money/             # Banking and financial safety videos
```

## Video Requirements

### Recommended Specifications:
- **Format**: MP4 (H.264 codec) or WebM
- **Resolution**: 1280x720 (720p) or 1920x1080 (1080p)
- **Aspect Ratio**: 16:9
- **Duration**: 30 seconds to 3 minutes
- **File Size**: Keep under 50MB per video for better loading

### Video Naming Convention:
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Be descriptive but concise
- Examples:
  - `seatbelt.mp4`
  - `no-mobile.mp4`
  - `traffic-signals.mp4`

## How to Add Videos

1. Place your video files in the appropriate category folder
2. Update the `data.js` file with the correct path:
   ```javascript
   {text: 'Your instruction text', video: 'videos/category/filename.mp4'}
   ```
3. If no video is available, set `video: null`

## Creating/Sourcing Videos

### Option 1: Create Your Own
- Use screen recording software
- Use video editing tools (Adobe Premiere, DaVinci Resolve, etc.)
- Use animation tools (After Effects, Blender, etc.)

### Option 2: Free Stock Videos
- Pexels (https://www.pexels.com/videos/)
- Pixabay (https://pixabay.com/videos/)
- Videvo (https://www.videvo.net/)

### Option 3: Animated Explainers
- Create simple animations using:
  - Canva
  - Animaker
  - Vyond
  - Powtoon

## Important Notes

- Ensure you have the rights to use all videos
- Keep videos short and focused on the specific point
- Add subtitles/captions in both English and Hindi if possible
- Test videos in different browsers (Chrome, Firefox, Edge, Safari)
- Optimize video files for web (use tools like HandBrake)

## Browser Support

The website supports:
- MP4 (works in all modern browsers)
- WebM (as fallback for browsers that prefer it)

Videos will automatically use the appropriate format based on browser support.
