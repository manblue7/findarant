// const yelp = require('yelp-fusion');
// const client = yelp.client(yapiKey);

// WORKING
const yapiKey = 'MrbNcTw6oQGYVgHrP6ZjKJuvDqjzuEGtTMn0dmniC3wMRxemcZnR_CiZoLxWzv1OwRQ12Jyt1BY78nM2UX9AcuNUIKqNZ3LDGHDPiLIpwUfaitNNwIuNxGMCrzlLZHYx';
const options = {method: 'GET', headers: {accept: 'application/json',  Authorization: 'Bearer ' + yapiKey,}};

// Option buttons up/down
function optionToggle(btn) {
    if(btn.className == 'misc') {
        btn.className = 'misc active';
        return;
    }
    btn.className = 'misc';
}

// Change color off price button on/off green
function priceColor(priceBtn){
    if(priceBtn.style.backgroundColor != 'green') {
        priceBtn.style.backgroundColor = 'green';
        return;
    } 
    priceBtn.style.backgroundColor = 'rgb(234, 234, 234)';
}

function displayRanRes(busiJson) {
    let random = Math.floor(Math.random() * 51);
    document.getElementById("resName").innerHTML = busiJson.businesses[random].name;
    document.getElementById("resImg").src = busiJson.businesses[random].image_url;
    document.getElementById("resRate").innerHTML = "Rating: " + busiJson.businesses[random].rating
    document.getElementById("resPrice").innerHTML = "Price: " + busiJson.businesses[random].price;
    document.getElementById("resAddr").innerHTML = busiJson.businesses[random].location.address1;
    document.getElementById("resNum").innerHTML = busiJson.businesses[random].phone;
    document.getElementById("resLink").href = busiJson.businesses[random].url;
    document.getElementById("resLinkTx").innerhtml = busiJson.businesses[random].url;
}

let price = {};
let openNow = "false";
let busiInfo;
function get_res_info() {
    locationIN = document.getElementById("location").value;
    locationIN.toLowerCase();
    price = "1%2C2%2C3%2C4";
    if(document.getElementById("openNowBtn").className == 'misc active') {
        openNow = "true";
    }
    let limitIN = 50;
    let category = document.getElementById("cat-names").options[document.getElementById('cat-names').selectedIndex].text;
    category = category.toLowerCase();
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=${openNow}&price=${price}&term=${category}&location="${locationIN}"&sort_by=best_match&limit=${limitIN}`;
    fetch(url, options)
    .then(res => res.json())
    .then(json => {console.log(json); displayRanRes(json)})
    .catch(err => console.log('error: ' + err));
}




// WORKING


// async function getFood(cat_input) {
    
//     for(let i = 0; i <= 19; i++) {
//         client.search({
//             location: 'pensacola, fl',
//             term: cat_input,
//             limit: 50,
//             offset: i*50,
//         }).then(response => {
//             let jsonR = response.jsonBody.businesses;
//             for(let i = 0; i < jsonR.length; i++) {
//                 console.log(jsonR[i].name);
//             }
//         }).catch(e =>{
//             console.log(e);
//         });
//         await new Promise(r => setTimeout(r, 250));
//     }    
// }