const url1 = 'https://api.exchangeratesapi.io/latest?base=USD'
const shown = document.querySelectorAll('.active')
console.log(shown)
const button = document.querySelectorAll('.dropdown');

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
        })
    .catch(err => {
        console.log("something went wrong...", err)
    })

for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(evt) {
        shown[i].classList.toggle('active')
        shown[i].innerText = "WHHHYYYY"
        
    })
}
