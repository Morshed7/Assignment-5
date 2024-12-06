
const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', function(){


    const donateAmount = parseFloat(document.getElementById('donate-amount').value);

    if (donateAmount <= 0 || isNaN(donateAmount)) {
        alert("Please enter a correct amount!");
        return;
    }

    
   const totalDonateAmount = document.getElementById('total-donate-amount');
   let currentAmount = parseInt(totalDonateAmount.textContent); 
  
   let newAmount = donateAmount + currentAmount;

   totalDonateAmount.innerHTML = `<img src="assets/coin.png">${newAmount}<span>BDT</span>`;


    const mainBalance = document.getElementById('my-main-balance');
    let presentAmount = parseInt(mainBalance.textContent);
    let restAmount = presentAmount - donateAmount;
    mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;

    
})


