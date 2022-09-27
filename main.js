const electron = require('electron');
const ejs = require('ejs-electron');


const {app, BrowserWindow} = electron;


// app.on('ready', ()=>{
//     const win = new BrowserWindow({
//         width:800,
//         height:600
//     });
//     win.loadFile("app/index.ejs")
// })

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('app/index.ejs')
    win.webContents.openDevTools();
  }



// const createWindow = () => {

//     // win.loadFile("app/index.ejs")
// }

app.whenReady().then(() => {
    createWindow()
})



// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') app.quit()
//   })



