const url1 = 'https://api.exchangeratesapi.io/latest?base=USD'
const shown = document.querySelectorAll('.active')
const button = document.querySelectorAll('.dropdown');
const rate = document.querySelector('.rate')
const myTotal = document.querySelector('.total')
const submit = document.querySelector('.submit')
const amount = document.querySelector('.amount')

fetch(url1)
    .then(res => {
        return res.json()

    })
    .then(res => {
        let key = Object.keys(res.rates) //returns key of rates
        for (i = 0; i < shown.length; i++) {
                    switch (shown[i].dataset.currency) { //checks for match
                        case 'EUR':
                            shown[i].innerText = res.rates.EUR
                            rate.innerText.value = res.rates.EUR
                            break;
                        case 'JPY':
                            shown[i].innerText = res.rates.JPY
                            break;
                        case 'GBP':
                            shown[i].innerText = res.rates.GBP
                            break;
                        case 'AUD':
                            shown[i].innerText = res.rates.AUD
                            break;
                        case 'CAD':
                            shown[i].innerText = res.rates.CAD
                            break;
                        case 'CHF':
                            shown[i].innerText = res.rates.CHF
                            break;
                        case 'CNY':
                            shown[i].innerText = res.rates.CNY
                            break;
                        case 'SEK':
                            shown[i].innerText = res.rates.SEK
                            break;
                        case 'NZD':
                            shown[i].innerText = res.rates.NZD
                            break;
                        case 'HKD':
                            shown[i].innerText = res.rates.HKD
                            break;
            }
        
        }
        for (let i = 0; i < button.length; i++) { //event listener to display rate
            button[i].addEventListener('click', function (evt) {
                evt.preventDefault()
                shown[i].classList.toggle('active')
                rate.value = shown[i].innerText
            })
        }
        submit.addEventListener('click', function(evt){ //event listener for calc results
            evt.preventDefault()
            calculate(rate.value,amount.value)
            myTotal.innerText = 'The total is: ' + total.toFixed(2);
        })
        
    })
    .catch(err => {
        console.log("something went wrong..", err)
    })
calculate = function(amt,rate){ //calculator function
    total = amt * rate ;
    return total
}

//Tissa helped with scoping


