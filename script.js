const url1 = 'https://api.exchangeratesapi.io/latest?base=USD'


const shown2 = document.querySelectorAll('.active[data-currency]')
const button = document.querySelectorAll('.dropdown');
console.log(shown2)
let asideText = document.getElementsByClassName('active')
console.log(asideText[0])

for (let i = 0; i < button.length; i++) {
    asideText[0].innerHTML = "WHHHHHHYYY"
    button[i].addEventListener('click', function (evt) {
        
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
                // asideText[0].innerHTML = object.value(res.rates)   // Ben helped debug this loop
                for (let j = 0; j < key.length; j++) {
                        // console.log(shown2[i].dataset.currency + " " + key[j])
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
