let warning = "";
let weatherkey = "e9d9b7c16aef4482821201246211807";
let locationkey = "8b457aaaffcbf97107c32913d38e2edd";

fetch(`http://api.ipstack.com/check?access_key=`+locationkey, {
    method: 'get',
})
.then(response => response.json())
.then(details=> {
    console.log(details);
    fetch(`http://api.weatherapi.com/v1/current.json?key=` + weatherkey + `&q=` + details.zip + `&aqi=no`, {
        method: 'get'
    })
    .then(response => response.json())
    .then(details =>{
        console.log(details);
        if(details.current.uv > 2){
            warning = "Yes, you need suncream today.";
        }
        else {
            warning = "No, you're safe from the sun today.";
        }
        
        document.getElementById("message").innerText = warning;
    })
})
