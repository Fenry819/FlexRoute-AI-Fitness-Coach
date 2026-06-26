const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    autoHideMenuBar: true, // Hides the ugly Windows File/Edit/View menu
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Check if we are running in development mode
  const isDev = process.env.NODE_ENV === 'development';
  
  if (isDev) {
    // In dev, load the Vite local server
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // In production, load the compiled React files
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }
}

app.whenReady().then(createWindow);

// Quit when all windows are closed (standard desktop app behavior)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});