/**
 * Created by uruom on 2018/06/09.
 */
const electron = nodeRequire('electron');
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const fs = nodeRequire('fs');

var histWidth = $('#history_temp_outFlame').width();

//ウィンドウ起動時の処理
window.onload  = function(){
    console.log("s");
    //$('#theme').css("background-image","url(../background/Theme2.jpg)");


};

ipc.on('weather_forecast',function(event, data){
    console.log(data);

    day_set(data);

});

ipc.on('weather',function(event, data){
    console.log(data);
    weather_icon_select(data);
});

function setWeatherIcon(weather, tem, humidity, icon){
    $('#now_weather_icon').css("background-image","url(../background/Weather/"+icon+")");
    $('#now_forecast').append("weather : "+weather);
    $('#now_temp').append("temperature : "+tem+"℃");
    $('#now_humidity').append("humidity : "+humidity+"%");

}


function weather_icon_select(data){
    var weatherIcon = data.weather[0].id;
    var weather = data.weather[0].description;
    var tem = Math.round(Number(data.main.temp) - 273);
    var humidity = String(data.main.humidity);
    tem = String(tem);

    if(weatherIcon === 200){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");
    }
    else if(weatherIcon === 202){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 210){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 211){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 212){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 221){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 230){

        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 231){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 232){
        setWeatherIcon(weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 300){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 301){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 302){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 310){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 311){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 312){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 313){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 314){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 321){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 500){
        setWeatherIcon(weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 501){
        setWeatherIcon(weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 502){
        setWeatherIcon(weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 503){
        setWeatherIcon(weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 504){
        setWeatherIcon(weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 511){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 520){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 521){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 522){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 531){
        setWeatherIcon(weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 600){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 601){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 602){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 611){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 612){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 615){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 616){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 620){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 621){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 622){
        setWeatherIcon(weather, tem, humidity, "Snow.png");

    }
    else if(weatherIcon === 701){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 711){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 721){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 731){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 741){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 751){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 761){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 762){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 771){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 781){
        setWeatherIcon(weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 800){
        setWeatherIcon(weather, tem, humidity, "Sunny.png");

    }
    else if(weatherIcon === 801){
        setWeatherIcon(weather, tem, humidity, "Cloudy.png");

    }
    else if(weatherIcon === 802){
        setWeatherIcon(weather, tem, humidity, "Cloudy.png");

    }
    else if(weatherIcon === 803){
        setWeatherIcon(weather, tem, humidity, "Cloudy.png");
    }
    else if(weatherIcon === 804){
        setWeatherIcon(weather, tem, humidity, "Cloudy.png");
    }
}


function setDayIcon(setId, addWeatherId, weather, tem, humidity, icon){
    var img = new Image();
    img.src = "../background/Weather/"+icon;
    img.id = addWeatherId;
    $("#"+setId).append(img);
    $("#"+addWeatherId).css({'max-width':'80%','margin':'auto','margin-top':'5%','margin-bottom':'5%'});
}


function day_icon_select(data, date, setId, addWeatherId){

    //予報データは毎日朝9時の天気を自動取得している．

    var weatherIcon = data.list[date*8].weather[0].id;
    var weather = data.list[date*8].weather[0].description;
    var tem = Math.round(Number(data.list[date*8].main.temp) - 273);
    var humidity = String(data.list[date*8].main.humidity);
    tem = String(tem);

    if(date===0){
        $('#day_one_forecast').append("weather : "+weather);
        $('#day_one_temp').append("temperature : "+tem+"℃");
        $('#day_one_humidity').append("humidity : "+humidity+"%");
        $('#date_one').append(data.list[date*8].dt_txt);


    }
    else if(date===1){
        $('#day_two_forecast').append("weather : "+weather);
        $('#day_two_temp').append("temperature : "+tem+"℃");
        $('#day_two_humidity').append("humidity : "+humidity+"%");
        $('#date_two').append(data.list[date*8].dt_txt);

    }
    else if(date===2){
        $('#day_three_forecast').append("weather : "+weather);
        $('#day_three_temp').append("temperature : "+tem+"℃");
        $('#day_three_humidity').append("humidity : "+humidity+"%");
        $('#date_three').append(data.list[date*8].dt_txt);

    }
    else if(date===3){
        $('#day_four_forecast').append("weather : "+weather);
        $('#day_four_temp').append("temperature : "+tem+"℃");
        $('#day_four_humidity').append("humidity : "+humidity+"%");
        $('#date_four').append(data.list[date*8].dt_txt);

    }
    else if(date===4){
        $('#day_five_forecast').append("weather : "+weather);
        $('#day_five_temp').append("temperature : "+tem+"℃");
        $('#day_five_humidity').append("humidity : "+humidity+"%");
        $('#date_five').append(data.list[date*8].dt_txt);

    }

    if(weatherIcon === 200){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");
    }
    else if(weatherIcon === 202){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 210){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 211){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 212){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 221){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 230){

        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 231){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 232){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Thunderstorms.png");

    }
    else if(weatherIcon === 300){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");

    }
    else if(weatherIcon === 301){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 302){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 310){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 311){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 312){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 313){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 314){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 321){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 500){

        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 501){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 502){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 503){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 504){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Slight Drizzle.png");

    }
    else if(weatherIcon === 511){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 520){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 521){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 522){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 531){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Drizzle.png");
    }
    else if(weatherIcon === 600){

        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 601){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 602){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 611){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 612){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 615){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 616){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 620){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 621){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 622){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Snow.png");
    }
    else if(weatherIcon === 701){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");
    }
    else if(weatherIcon === 711){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 721){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 731){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 741){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 751){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 761){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 762){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 771){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 781){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Haze.png");

    }
    else if(weatherIcon === 800){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Sunny.png");

    }
    else if(weatherIcon === 801){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Cloudy.png");

    }
    else if(weatherIcon === 802){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Cloudy.png");

    }
    else if(weatherIcon === 803){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Cloudy.png");

    }
    else if(weatherIcon === 804){
        setDayIcon(setId, addWeatherId, weather, tem, humidity, "Cloudy.png");

    }

}

function day_set(data){
    day_icon_select(data, 0, "day_one_icon", "one_day");
    day_icon_select(data, 1, "day_two_icon", "two_day");
    day_icon_select(data, 2, "day_three_icon", "three_day");
    day_icon_select(data, 3, "day_four_icon", "four_day");
    day_icon_select(data, 4, "day_five_icon", "five_day");

}

