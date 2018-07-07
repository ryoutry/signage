/**
 * Created by uruom on 2018/06/09.
 */
/**
 * Created by uruom on 2018/05/14.
 */
const {app, BrowserWindow} = require('electron');
const electron = require('electron');
const ipc = electron.ipcMain;
var http = require('http');
const request = require('request');
var location = "Hitachi,jp";
var APIKEY = "d7af4703ed2581a918e9574fde20a7d5";
var URL = 'http://api.openweathermap.org/data/2.5/forecast?q='+ location +'&APPID='+ APIKEY;
var URL2 = 'http://api.openweathermap.org/data/2.5/weather?q='+ location +'&APPID='+ APIKEY;




//ローカルにwebサーバを起動する

let mainWindow = null;
//アプリケーション画面の背景を表示．

app.on('ready', function() {

    var weatherForecastResp;
    var weatherResp;


    mainWindow = new BrowserWindow({
        fullscreen: true,
        autoHideMenuBar: true,
        skiptaskbar: false,
        darkTheme: false,
        resize: false
    });

    mainWindow.loadURL(`file://${__dirname}/html/defaultWindow.html`);

    mainWindow.webContents.on('did-finish-load',function(){
        request.get({
            uri: URL,
            headers: {'Content-type': 'application/json'},
            qs: {

                q: location,
                APPID: APIKEY
            },
            json: true
        }, function(err, req, data){
            weatherForecastResp = data;
            mainWindow.webContents.send('weather_forecast',weatherForecastResp);
        });
        request.get({
            uri: URL2,
            headers: {'Content-type': 'application/json'},
            qs: {

                q: location,
                APPID: APIKEY
            },
            json: true
        }, function(err, req, data){
            weatherResp = data;
            mainWindow.webContents.send('weather',weatherResp);
        });


    });


    mainWindow.on('closed', function(){
        mainWindow = null;
    });




});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

