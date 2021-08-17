function displayData(){
    var countryName = document.getElementById("inputField").value;
    
    //fetch request to coronavirus stats api
    fetch("https://corona.lmao.ninja/v2/countries/"+countryName)
        .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("name").innerHTML = data.country;
        document.getElementById("cases").innerHTML = data.cases;
        document.getElementById("active-cases").innerHTML = data.active;
        document.getElementById("critical-cases").innerHTML = data.critical;
        document.getElementById("recovered").innerHTML = data.recovered;
        document.getElementById("deaths").innerHTML = data.deaths;
        document.getElementById("tests").innerHTML = data.tests;
    });
}