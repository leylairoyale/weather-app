// let url = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago,usa&appid=12c5aa6af78d82dfd019db09f036867d'
// $.ajax({
//     url: url,
//     dataType: "jsonp",
//     success: function (data) {
//       console.log(data);
//     }
//   });

function getWeather() {
    let city = $('#submit-form input[name=city').val()
    let country = $('#submit-form input[name=lap').val()
    // let city = "Chicago"
    // let country = "US"

$.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=12c5aa6af78d82dfd019db09f036867d', function( data ) {
    console.log(data)
    // get the data bb.
     let kcurrent = data.main.temp
     let current = Math.round(((1.8 * (kcurrent - 273)) + 32))
     console.log(current)
     let khigh = data.main.temp_max
     let high = Math.round(((1.8 * (khigh - 273)) + 32))
     console.log(high)
     let klow = data.main.temp_min
     let low = Math.round(((1.8 * (klow - 273)) + 32))
     console.log(low)
     let forecast = data.weather[0].description
     console.log(forecast)
     let humidity = data.main.humidity
     console.log(humidity)
     $('#Current').text(current + "°")
     $('#High').text(high + '°')
     $('#Low').text(low + '°')
     $('#Forecast').text(forecast)
     $('#Humidity').text(humidity + '%')




})}


