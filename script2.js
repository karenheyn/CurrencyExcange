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
        console.log(res)
        console.dir(res.rates)
        let key = Object.keys(res.rates)
        console.dir(res.rates)
        console.dir(key)
        console.log(Object.values(res.rates))
        console.log(res.rates.EUR)
        // console.log(shown[i].dataset.currency)
        for (i = 0; i < shown.length; i++) {
        //     for (j = 0; j < key.length; j++) {
                // if (key[j] === shown[i].dataset.currency) {
                    // console.log(key[j] + shown[i].dataset.currency)
                    switch (shown[i].dataset.currency) {
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

                    // }
                    // shown[i].innerText = res.rates.values
                // }
            }
        
        }
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function (evt) {
                evt.preventDefault()
                shown[i].classList.toggle('active')
                rate.value = shown[i].innerText
            })
        }
        submit.addEventListener('click', function(evt){
            evt.preventDefault()
            console.log(evt.target)
            calculate(rate.value,amount.value)
            myTotal.innerText = total.toFixed(2);
        })
        
    })
    .catch(err => {
        console.log("something went wrong...", err)
    })
calculate = function(amt,rate){
    total = amt * rate ;
    return total
}



