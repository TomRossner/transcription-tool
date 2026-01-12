const { app, BrowserWindow } = require('electron');
const path = require('path');
const { existsSync } = require('fs');
const { autoUpdater } = require('electron-updater');

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
const isProd = !isDev;

function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: isProd,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, '../public/logo512.png'),
  });

  // Load the app
  if (isDev) {
    // In development, load from Vite dev server
    mainWindow.loadURL('http://localhost:3000');
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load from the built files
    // electron-builder structure: resources/app/dist/index.html when dist/**/* is in files
    const appPath = app.getAppPath();
    let indexPath;
    
    if (app.isPackaged) {
      // When packaged, dist folder structure is preserved
      indexPath = path.join(appPath, 'dist/index.html');
    } else {
      // When running locally in production mode
      indexPath = path.join(__dirname, '../dist/index.html');
    }
    
    if (existsSync(indexPath)) {
      mainWindow.loadFile(indexPath);
    } else {
      // Try alternative path (dist contents might be at app root)
      const altPath = path.join(appPath, 'index.html');
      if (existsSync(altPath)) {
        mainWindow.loadFile(altPath);
      } else {
        console.error('Production build not found. Please run npm run build first.');
      }
    }
  }

  // Handle window closed
  mainWindow.on('closed', () => {
    // Dereference the window object
    app.quit();
  });
}

// Configure auto-updater (only in production)
if (!isDev) {
  autoUpdater.autoDownload = false;

  autoUpdater.on('update-available', () => {
    console.log('Update available');
    // Download the update
    autoUpdater.downloadUpdate();
  });

  autoUpdater.on('update-downloaded', () => {
    console.log('Update downloaded');
    // Install the update and restart the app
    autoUpdater.quitAndInstall(false, true);
  });

  autoUpdater.on('error', (error) => {
    console.error('Auto-updater error:', error);
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // Check for updates after app is ready (only in production)
  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }

  app.on('activate', () => {
    // On macOS, re-create a window when the dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
