function sendCode(){
    let postCode = document.getElementById("post_code").value
    fetch('http://geoapi.heartrails.com/api/json?method=searchByPostal&postal='+postCode)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let resultHtml = document.getElementById('result')
            if('error' in data.response){
                resultHtml.innerHTML = '<div id="error">'+data.response.error+'</div>'
            }else{
                let tableBody = ""
                for (const location of data.response.location) {
                    tableBody = tableBody + '<tr><td>'+location.city+'</td><td>'+location.town+'</td></tr>'
                }
                resultHtml.innerHTML = '<table border="1"><th>市</th><th>町</th>'+tableBody+'</table>'
            }
        });
}
