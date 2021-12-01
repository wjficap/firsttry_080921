
var crosgd;
var dotsgd;
var maticsgd;

function calculatecro()
{
    var delegated = document.querySelector("#id_delegated").value;
    var croheld = document.querySelector("#id_croheld").value;
    var dotheld = document.querySelector("#id_dotheld").value;
    var maticheld = document.querySelector("#id_maticheld").value;

    var crosgdf1 = crosgd;
    var dotsgdf1 = dotsgd;
    var maticsgdf1 = maticsgd;

// the total CRO paid out, divided by the time since CRO mainnet on 25 march 2021
// is 185.321bn / 166 days = 1.11639 bn CRO paid per day or 407.48 CRO per year. 
// Divided by amount delgated of 3.549, and multiplied by 1.2m CRO that I have.


    var apy = (407.48 / delegated /10).toFixed(2);
    // var crodaily = (apy / 100 *croheld / 365);
    // (changed to 2% because of Earn 14 Nov 2021)
    var crodaily = (2 / 100 *croheld / 365);
    
    var dotdaily = (8 / 100 *dotheld / 365);
    // @rate changed to 8% flexible
    var maticdaily = (8 / 100 *maticheld / 365);
    // @rate changed to 8% flexible
    // 

    var sgdperday = crodaily * crosgdf1 + dotdaily * dotsgdf1 + maticdaily * maticsgdf1;
    var sgd_cro_perday = crodaily * crosgdf1;

    // document.querySelector("#id_apy").innerHTML = apy;
    // document.querySelector("#id_sgd_cro_permth").innerHTML = (sgd_cro_perday * 30).toFixed(2);
    document.querySelector("#id_sgdperday").innerHTML = (sgdperday).toFixed(2);
    document.querySelector("#id_sgdperwk").innerHTML = (sgdperday * 7).toFixed(2);
    document.querySelector("#id_sgdpermth").innerHTML = (sgdperday * 30).toFixed(2);
}


function data_update(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccrypto-com-chain%2Cpolkadot%2Cmatic-network&vs_currencies=usd%2Csgd")
    .then(response => response.json())

    .then(data => {
        console.log(data);
        crosgd = data['crypto-com-chain'].sgd;
        crousd = data['crypto-com-chain'].usd;
        btcusd = data['bitcoin'].usd;
        dotsgd = data['polkadot'].sgd;
        maticsgd = data['matic-network'].sgd;
        // console.log(rate);
        document.querySelector("#crousd").innerHTML = crousd;
        document.querySelector("#crosgd").innerHTML = crosgd;
        document.querySelector("#btcusd").innerHTML = btcusd;
        document.querySelector("#dotsgd").innerHTML = dotsgd;
        document.querySelector("#maticsgd").innerHTML = maticsgd;
    })   

}


// document.addEventListener("DOMContentLoaded", function() {
//     fetch("https://api.coingecko.com/api/v3/simple/price?ids=crypto-com-chain&vs_currencies=usd%2Csgd")
//     // fetch("https://api.coingecko.com/api/v3/simple/price?ids=crypto-com-chain&vs_currencies=SGD")
//     .then(response => response.json())

//     .then(data => {
//         console.log(data);
//         ratesgd = data['crypto-com-chain'].sgd;
//         rateusd = data['crypto-com-chain'].usd;
//         // console.log(rate);
//         document.querySelector("#geckousd").innerHTML = rateusd;
//         document.querySelector("#geckosgd").innerHTML = ratesgd;

//     })    
// });