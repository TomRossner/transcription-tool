// Preload script runs in a separate context before the web page loads
// It has access to Node.js APIs but is isolated from the renderer process

const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
// the API in a secure way
contextBridge.exposeInMainWorld('electronAPI', {
  // Add any Electron APIs you want to expose to the renderer process here
  // For example:
  // platform: process.platform,
});
