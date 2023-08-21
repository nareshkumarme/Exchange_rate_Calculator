let Currency_one = document.getElementById("currency-one");
let Currency_two = document.getElementById("currency-two");
let amount_one = document.getElementById("amount-one");
let amount_two = document.getElementById("amount-two");
let swap = document.getElementById("swap");
let rateEl = document.getElementById("rate")

function calculate(){
    fetch(`https://v6.exchangerate-api.com/v6/d186ce6e7b4af315e8112232/latest/${Currency_one.value}`)
    .then(res => res.json()
    .then(data => {
       let rate = data.conversion_rates[Currency_two.value];
       rateEl.innerText = `1 ${Currency_one.value} = ${rate} ${Currency_two.value}`
       amount_two.value = (amount_one.value * rate).toFixed(2)
    })
    )
}



Currency_one.addEventListener('change',calculate);
Currency_two.addEventListener('change',calculate);
amount_one.addEventListener('change',calculate);
amount_two.addEventListener('change',calculate);


swap.addEventListener('click', () => {
    const temp = Currency_one.value;
    Currency_one.value = Currency_two.value;
    Currency_two.value = temp;
    calculate()

})


