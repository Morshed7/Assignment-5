
const noakhalidonateButton = document.getElementById('noakhali-donate-button');
noakhalidonateButton.addEventListener('click', function(){


    const noakhaliDonateAmount = parseFloat(document.getElementById('noakhali-donate-amount').value);

    if (noakhaliDonateAmount <= 0 || isNaN(noakhaliDonateAmount)) {
        alert("Please enter a correct amount!");
        return;
    }

    
   const noakhaliTotalDonateAmount = document.getElementById('noakhali-total-donate-amount');
   let noakhaliCurrentAmount = parseInt(noakhaliTotalDonateAmount.textContent); 
  
   let noakhaliNewAmount = noakhaliDonateAmount + noakhaliCurrentAmount;

   noakhaliTotalDonateAmount.innerHTML = `<img src="assets/coin.png">${noakhaliNewAmount}<span>BDT</span>`;


    const mainBalance = document.getElementById('my-main-balance');
    let presentAmount = parseInt(mainBalance.textContent);
    let restAmount = presentAmount - noakhaliDonateAmount;
    mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;

    //-------------------- history donation amount--------------------------------------------------------
    // const donationHistory = document.getElementById('donation-history');
    // let newHistoryEntry = document.createElement('div');
    // newHistoryEntry.textContent = `Donated: ${donateAmount} BDT`;
    // donationHistory.appendChild(newHistoryEntry);

})

// -----------Donate for Flood Relief in Feni,Bangladesh ------------------

    const feniDonateButton = document.getElementById('feni-donate-button');
 
    feniDonateButton.addEventListener('click', function(){

        const feniDonateAmount = parseFloat(document.getElementById('feni-donate-amount').value);

        if (feniDonateAmount <= 0 || isNaN(feniDonateAmount)) {
            alert("Please enter a correct amount!");
            return;
        }

        const feniTotalDonateAmount = document.getElementById('feni-total-donate-amount');
        let feniCurrentAmount = parseInt(feniTotalDonateAmount.textContent); 
       
        let feniNewAmount = feniDonateAmount + feniCurrentAmount;
     
        feniTotalDonateAmount.innerHTML = `<img src="assets/coin.png">${feniNewAmount}<span>BDT</span>`;


        const mainBalance = document.getElementById('my-main-balance');
        let presentAmount = parseInt(mainBalance.textContent);
        let restAmount = presentAmount - feniDonateAmount;
        mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;

    })

    // ----------Aid for Injured in the Quota Movement----------------

    const InjuredDonateButton = document.getElementById('injured-donate-button');
    InjuredDonateButton.addEventListener('click', function(){

        const injuredDonateAmount = parseFloat(document.getElementById('injured-donate-amount').value);

        if (injuredDonateAmount <= 0 || isNaN(injuredDonateAmount)) {
            alert("Please enter a correct amount!");
            return;
        }

        const injuredTotalDonateAmount = document.getElementById('injured-total-donate-amount');
        let injuredCurrentAmount = parseInt(injuredTotalDonateAmount.textContent); 

        let injuredNewAmount = injuredDonateAmount + injuredCurrentAmount;
     
        injuredTotalDonateAmount.innerHTML = `<img src="assets/coin.png">${injuredNewAmount}<span>BDT</span>`;


        const mainBalance = document.getElementById('my-main-balance');
        let presentAmount = parseInt(mainBalance.textContent);
        let restAmount = presentAmount - injuredDonateAmount;
        mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;

    })