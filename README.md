# Transcript Desktop App

A desktop transcription tool built with Electron, React, and Vite.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

### Option 1: Run with hot reload (Recommended)

This will start the Vite dev server and Electron together:
```bash
npm run electron:dev
```

### Option 2: Run separately

Terminal 1 - Start Vite dev server:
```bash
npm run dev
```

Terminal 2 - Start Electron:
```bash
npm run electron
```

## Building

Build the React app for production:
```bash
npm run build
```

Build the Electron app (creates installers):
```bash
npm run electron:dist
```

This will create platform-specific installers in the `dist-electron` folder:
- Windows: NSIS installer
- macOS: DMG file
- Linux: AppImage

## Project Structure

```
├── electron/          # Electron main process files
│   ├── main.js       # Main process entry point
│   └── preload.js    # Preload script
├── src/              # React application source
├── public/           # Static assets
├── dist/             # Production build output (generated)
├── dist-electron/    # Electron build output (generated)
└── vite.config.js    # Vite configuration
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build React app for production
- `npm run electron` - Start Electron (requires dev server running)
- `npm run electron:dev` - Start both Vite and Electron together
- `npm run electron:dist` - Build and package Electron app
- `npm run preview` - Preview production build
- `npm test` - Run tests

## Technologies

- **Electron** - Desktop app framework
- **React** - UI library
- **Vite** - Build tool and dev server
- **Sass** - CSS preprocessing
