const API_KEY = `46ad7457603b9b0104e633e78cd60e16`
const loadTempreture = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayTempreture(data))
}
const displayTempreture = data => {
    // const tempreture = document.getElementById('tempreture');
    // tempreture.innerText = data.main.temp;
    setTempretureText('tempreture', data.main.temp)
    setTempretureText('weadether',data.weather[0].main)
    console.log()
}



    
document.getElementById('search').addEventListener('click', function () {
    // set city
    const searchFiled = document.getElementById('search-field')
    const city = searchFiled.value;
    
    document.getElementById('currentCity').innerText = city;
    loadTempreture(city)
    
})

loadTempreture('dhaka');