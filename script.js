const url1 = 'https://api.exchangeratesapi.io/latest?base=USD'

const shown2 = document.querySelectorAll('.active[data-currency]')
const shown = document.querySelectorAll('.active')
const button = document.querySelectorAll('.dropdown');

console.log(shown2)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (evt) {
        fetch(url1)
            .then(res => {
                return res.json()
            })
            .then(res => {
                let key = Object.keys(res.rates)       // Ben helped debug this loop
                for (let j = 0; j < key.length; j++) {
                        console.log(shown2[i].dataset.currency + " " + key[j])
                        if (key[j] === shown2[i].dataset.currency) {
                            console.log('active')
                            shown2[i].classList.toggle('active')
                    }
            }})
            .catch(err => {
                console.log("something went wrong...", err)
            })

    })
}
