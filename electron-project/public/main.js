const { ipcMain,app, BrowserWindow } = require('electron')


function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  //remove menu bar from top
  win.removeMenu();
  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on("msg", (event,arg) => {
  console.log("main process");
})

//write to search terms
ipcMain.on('anything-asynchronous', (event, arg) => {
  // gets triggered by the async button defined in the App component
  console.log("async") // prints "async ping"
})

// gets triggered by the sync button defined in the App component
ipcMain.on('anything-synchronous', (event, arg) => {
  console.log("sync",arg) // prints "sync ping"
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
/*
function writeToProxiesFile(s){
  //take a string s, check its formatt, if formatt okay then write to file 
  let len = s.length;
  var array = new Array;
  //for each character, check for comma or space or newline
  //seperate before to now into new Array

  var newString = "";
  //seperate th
  for (let i = 0; i < len; i++) {
      if ( s[i] === ',' || s[i] === ' ' || s[i] === '\n') {
          if (newString.length > 0){  
              array.push(newString);
          }
          newString = [];
      }else{
          newString += s[i];
          console.log(s[i]);
      }
      
  }
  if (newString.length > 0 ){
      array.push(newString);
  }
  //comma seperated string
  newString = "";
  for (let i = 0 ;i < array.length;i++){
      newString = newString + array[i];
      newString += ',';
  }
  newString.substring(0,newString.length);

  //write to the file
  
  fs.writeFileSync('../../public/proxies.txt',newString);
  console.log(array);
  return;
}*/
