
var rate;
var id_rate_out;
var id_fiat_received;
var id_crypto_out;
var id_crypto_received;
var openxrate;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today_date = mm + '/' + dd + '/' + yyyy;

function data_mess(){
    fetch("https://data.messari.io/api/v1/assets/"+document.querySelector("#crypto_exc").value+"/metrics/market-data")
    .then(response => response.json())
    .then(messariRes => messariRes.data)
    .then(data => {

        rate = data["market_data"]["price_usd"];
        document.querySelector("#id_rate").innerHTML = rate;
    })   

}

function data_openx(){
    fetch("https://openexchangerates.org/api/latest.json?app_id=7dbf177aec7243ee953662db9fd934f4")
    .then(response => response.json())
    .then(data => {
        // console.log(data.rates["document.querySelector("#fiat_exc").value"]);
        // alert(data.rates.SGD);
        openxrate = data.rates[document.querySelector("#fiat_exc").value];
        // alert(openxrate);
        document.querySelector("#id_openx").innerHTML = openxrate;
    })   

}

function cal_rate(){
     
    id_rate_out = (document.querySelector("#id_crypto_in").value * rate * openxrate);
    document.querySelector("#id_rate_out").innerHTML = id_rate_out;
    
    id_crypto_out = (document.querySelector("#id_rate_in").value / (rate * openxrate));
    document.querySelector("#id_crypto_out").innerHTML = id_crypto_out;

}


function cal_comm1(){
    
    id_fiat_received = document.querySelector("#id_fiat_received").value;
    var fiat_fee = id_rate_out - id_fiat_received;
    var fiat_comm = fiat_fee / id_rate_out * 100;
    document.querySelector("#id_fiat_comm").innerHTML = "Fee paid: $"+(fiat_fee).toFixed(2)+" | "+(fiat_comm).toFixed(2)+"%";
}

function cal_comm2(){
    
    id_crypto_received = document.querySelector("#id_crypto_received").value;
    var crypto_fee = id_crypto_out - id_crypto_received;
    var crypto_comm = crypto_fee / id_crypto_out * 100;
    document.querySelector("#id_crypto_comm").innerHTML = "Crypto Fee paid:"+(crypto_fee).toFixed(2)+" | "+(crypto_comm).toFixed(2)+"%";
}

function sell_log(){
    document.querySelector("#id_sell_log").innerHTML = today_date + ": Sell Crypto:" + 
    document.querySelector("#id_crypto_in").value + " " + document.querySelector("#crypto_exc").value + " at " +
    document.querySelector("#fiat_exc").value + " " + id_rate_out.toFixed(2) + " settled at " + id_fiat_received +". " +
    document.querySelector("#id_fiat_comm").innerHTML; 

    document.getElementById('id_txn_log').innerHTML = document.getElementById('id_txn_log').innerHTML +
    document.getElementById('id_sell_log').innerHTML + '<br>';

    localStorage.setItem("store_log_key", document.getElementById('id_txn_log').innerHTML);
}

function pay_log(){
    document.querySelector("#id_pay_log").innerHTML = today_date + ": Pay Fiat:" + 
    document.querySelector("#fiat_exc").value + " " + document.querySelector("#id_rate_in").value + " at " +
    id_crypto_out.toFixed(2) + " " + document.querySelector("#crypto_exc").value + 
    " settled at " + id_crypto_received +". " +
    document.querySelector("#id_crypto_comm").innerHTML; 

    document.getElementById('id_txn_log').innerHTML = document.getElementById('id_txn_log').innerHTML +
    document.getElementById('id_pay_log').innerHTML + '<br>';

    localStorage.setItem("store_log_key", document.getElementById('id_txn_log').innerHTML);
}

function show_log(){
    document.getElementById('id_txn_log').innerHTML = localStorage.getItem("store_log_key");
}

function delete_log(){
    localStorage.clear();
    document.getElementById('id_txn_log').innerHTML = null;
}

// function data_update(){
//         fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Ccrypto-com-chain%2Cpolkadot%2Cmatic-network&vs_currencies=usd%2Caud%2Ceur%2Cgbp%2Csgd%2Ctwd")
//         .then(response => response.json())
    
//         .then(data => {
    
//             rate = data[document.querySelector("#crypto_exc").value][document.querySelector("#fiat_exc").value];
     
//             // console.log(rate);
           
//             document.querySelector("#id_rate").innerHTML = rate.toLocaleString();
     
//             document.querySelector("#id_rate_out").innerHTML = (document.querySelector("#id_crypto_in").value * rate).toLocaleString();
//             document.querySelector("#id_crypto_out").innerHTML = (document.querySelector("#id_rate_in").value / rate).toLocaleString();
//         })   
    
//     }

// function calculate()
// {
    
//     var delegated = document.querySelector("#id_delegated").value;
//     var croheld = document.querySelector("#id_croheld").value;
//     var dotheld = document.querySelector("#id_dotheld").value;
//     var maticheld = document.querySelector("#id_maticheld").value;

//     var crosgdf1 = crosgd;
//     var dotsgdf1 = dotsgd;
//     var maticsgdf1 = maticsgd;

//     var apy = (0.5 / delegated * 0.77 *100).toFixed(2);
//     var crodaily = (apy / 100 *croheld / 365);
//     var dotdaily = (10 / 100 *dotheld / 365);
//     var maticdaily = (10 / 100 *maticheld / 365);

//     var sgdperday = crodaily * crosgdf1 + dotdaily * dotsgdf1 + maticdaily * maticsgdf1;

//     document.querySelector("#id_apy").innerHTML = apy;
//     document.querySelector("#id_sgdperday").innerHTML = (sgdperday).toFixed(2);
//     document.querySelector("#id_sgdpermth").innerHTML = (sgdperday * 30).toFixed(2);
// }