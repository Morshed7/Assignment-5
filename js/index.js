
const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', function(){

    const donateAmount = parseFloat(document.getElementById('donate-amount').value);
    
   const totalDonateAmount = document.getElementById('total-donate-amount');
   let currentAmount = parseInt(totalDonateAmount.textContent); 
  
   let newAmount = donateAmount + currentAmount;

   totalDonateAmount.innerHTML = `<img src="assets/coin.png">${newAmount}<span>BDT</span>`;
})


