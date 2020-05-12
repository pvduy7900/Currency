
let from = document.getElementById("fromList")
let to = document.getElementById("toList")
let amount = document.getElementById("amountInput")
let result = document.getElementById("resultArea")

let convertedAmount = 0
let formatamount = ''
const currencyRatio_USD_VND = 23207.90
const currencyRatio_EUR_VND = 25064.05
const currencyRatio_USD_EUR = 0.924028
function vndToUsd() {
    return amount.value/currencyRatio_USD_VND
}

function usdToVND() {
    return amount.value*currencyRatio_USD_VND
}

function vndToEur() {
    return amount.value/currencyRatio_EUR_VND
}

function eurToVND() {
    return amount.value*currencyRatio_EUR_VND
}

function eurToUsd() {
    return amount.value/currencyRatio_USD_EUR
}

function usdToEur() {
    return amount.value*currencyRatio_USD_EUR
}



function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

function convert() {

    if (from.value === 'VND' && to.value === 'USD') {  
        convertedAmount = vndToUsd()
        formatamount = formatCurrency(to.value, convertedAmount)
    } else if (from.value === 'USD' && to.value === 'VND') {
        convertedAmount = usdToVND()
        formatamount = formatCurrency(to.value, convertedAmount)
    } else if(from.value === 'VND' && to.value === 'EUR'){
        convertedAmount = vndToEur()
        formatamount = formatCurrency(to.value, convertedAmount)
    }else if(from.value === 'EUR' && to.value === 'VND'){
        convertedAmount = eurToVND()
        formatamount = formatCurrency(to.value, convertedAmount)
    }else if(from.value === 'EUR' && to.value === 'USD'){
        convertedAmount = eurToUsd()
        formatamount = formatCurrency(to.value, convertedAmount)
    }else if(from.value === 'USD' && to.value === 'EUR'){
        convertedAmount = usdToEur()
        formatamount = formatCurrency(to.value, convertedAmount)
    }else {
        formatamount = amount.value
        return;
    }
    alert("the resurt is: " + formatamount);
    console.log(formatamount)
}
result.innerHTML =`result is ${formatamount}`