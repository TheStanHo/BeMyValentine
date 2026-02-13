# Be My Valentine 💕

A playful single-page website where you can ask someone to be your valentine. The "No" button moves away from the cursor, making it impossible to click, while the "Yes" button opens a YouTube video of your choice.

## Features

- 🎯 **Moving "No" Button**: The "No" button detects when the cursor gets close and moves to a random position on the screen
- 🎬 **YouTube Integration**: Configurable YouTube video that opens when "Yes" is clicked
- 💖 **Romantic Design**: Beautiful valentine-themed UI with pink/rose color palette
- 📱 **Responsive**: Works perfectly on both desktop and mobile devices
- 🚀 **GitHub Pages Ready**: Automatically deploys to GitHub Pages

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure YouTube video:**
   - Open `src/config/constants.ts`
   - Update the `YOUTUBE_VIDEO_URL` constant with your desired YouTube video URL

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to the `main` branch

### Manual Deployment

1. Update the `base` path in `vite.config.ts` to match your repository name:
   ```typescript
   base: '/YourRepositoryName/',
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages using your preferred method

## Project Structure

```
BeMyValentine/
├── src/
│   ├── components/
│   │   ├── ValentineCard.tsx    # Main card component
│   │   ├── MovingButton.tsx      # "No" button that moves
│   │   └── YesButton.tsx         # "Yes" button
│   ├── config/
│   │   └── constants.ts          # Configuration (YouTube URL)
│   ├── hooks/
│   │   └── useMousePosition.ts   # Mouse tracking hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/
│   └── deploy.yml                # GitHub Actions workflow
└── package.json
```

## Technologies Used

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **GitHub Pages** for hosting

## Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **YouTube Video**: Update `src/config/constants.ts` with your video URL
- **Text**: Modify the text in `src/components/ValentineCard.tsx`
- **Button Behavior**: Adjust the movement threshold in `src/components/MovingButton.tsx`

## License

MIT

---

Made with 💕 for someone special
