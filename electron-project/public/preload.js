window.ipcRenderer = require('electron').ipcRenderer;
contextBridge.exposeInMainWorld("ipcRenderer",ipcRenderer)