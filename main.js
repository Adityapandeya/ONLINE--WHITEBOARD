
const electron = require("electron");

const app = electron.app;

function createWindow() {
    const win = new electron.BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadFile('index.html').then(function () {
        win.maximize();
     
    })
}
app.whenReady().then(createWindow);


