const { app, BrowserWindow } = require('electron')
const {ipcMain} = require("electron");
const path = require('path')
require("dotenv").config();
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 400,
  })
  console.log(process.env.DEV)
  if (process.env.DEV === "TRUE") {
    console.log("local");
    win.loadURL('http://localhost:' + process.env.PORT);
  }
  else {
    console.log(`file://${path.join(__dirname, '../../build/index.html')}`)
    win.loadURL(`file://${path.join(__dirname, '../../build/index.html')}`)
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})