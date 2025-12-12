## Feature Description:

**"Progressive Loading Screen with Blur Transition"**

This is an animated loading screen that creates a smooth visual transition from a blurred background to a clear view as content loads. It provides visual feedback to users during page initialization or content loading.

## Key Components:

1. **Animated Percentage Counter**: Shows loading progress from 0% to 100%
2. **Dynamic Blur Effect**: Background starts heavily blurred (30px) and gradually clears as loading completes
3. **Text Fade-out**: The percentage text slowly fades from opaque to transparent
4. **Smooth Transition**: Updates every 30ms for a fluid animation

## How It Works:
- Starts with a full-screen blurred background image
- Displays loading percentage (0% → 100%)
- As percentage increases:
  - Background blur decreases (30px → 0px)
  - Percentage text fades out (opacity: 1 → 0)
- Automatically stops at 100%

## Perfect Use Cases:
- App initialization screens
- Image or video loading states
- Content preloading screens
- Splash screens for web applications

## What's cool about it:
The `scale()` function, it maps the loading percentage (0-100) to different visual properties, simple, only the opacity and the blur, creating that smooth proportional transition. It's like watching a photo come into focus.