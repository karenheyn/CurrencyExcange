const url1 = 'https://api.exchangeratesapi.io/latest?base=USD'

const shown2 = document.querySelectorAll('.active[data-currency]')
const shown = document.querySelectorAll('.active')
const button = document.querySelectorAll('.dropdown');
 
button.forEach(drop => {
     drop.addEventListener('click', function(evt){
        fetch(url1)
	.then(res => {
		return res.json()
	})
	.then(res => {
        console.log("success!", res)
        console.log(Object.keys(res.rates))
        let key = Object.keys(res.rates)[i]
        
        for (i = 0; i< shown.length;i++){
            if (key === shown2) {
                shown[i].classList.toggle('active')
            }}
	})
	.catch(err => {
		console.log("something went wrong...", err)
	})
        // evt.preventDefault() 
        // console.log(evt)
        // for (i = 0; i< shown.length;i++){
        //     shown[i].classList.toggle('active')
        // }
     })
 });

//  let key = Object.keys(res.rates)[i]
        
//         for (i = 0; i< shown.length;i++){
//             if (key === shown2) {
//                 shown[i].classList.toggle('active')
//             }