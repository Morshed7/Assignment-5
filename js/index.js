
function historyList (noakhaliDonateAmount){
    const historyContainer = document.getElementById('history-list');
    const historyIteam = document.createElement('div');
    historyIteam.innerHTML =`
     <p class="text-xl">Donated ${noakhaliDonateAmount} BDT for Flood at Noakhali, Bangladesh on ${new Date().toLocaleString()}</p>
    `
    historyContainer.appendChild(historyIteam);
}



function historyListTwo (feniDonateAmount){
    const historyContainer = document.getElementById('history-list');
    const historyItemTwo = document.createElement('div');
    historyItemTwo.innerHTML =`
     <p class="text-xl">Donated ${feniDonateAmount} BDT for Flood at Feni, Bangladesh on ${new Date().toLocaleString()}</p>
    `
    historyContainer.appendChild(historyItemTwo);
}


function historyListThree (injuredDonateAmount){
    const historyContainer = document.getElementById('history-list');
    const historyItemThree = document.createElement('div');
    historyItemThree.innerHTML =`
     <p class="text-xl">Donated ${injuredDonateAmount} BDT Aid for Injured in the Quota Movement on ${new Date().toLocaleString()}</p>
    `
    historyContainer.appendChild(historyItemThree);
}



document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('donation-history').classList.add('bg-gray-100');
    document.getElementById('donation-btn').classList.add('bg-lime-300');
    document.getElementById('donation-history').classList.remove('bg-lime-300');
    document.getElementById('donation-btn').classList.remove('bg-gray-100');
})

document.getElementById('donation-history').addEventListener('click', function(){
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('donation-history').classList.add('bg-lime-300');
    document.getElementById('donation-history').classList.remove('bg-gray-100');
    document.getElementById('donation-btn').classList.add('bg-gray-100');
    document.getElementById('donation-btn').classList.remove('bg-lime-300');
    
})


const noakhalidonateButton = document.getElementById('noakhali-donate-button');
noakhalidonateButton.addEventListener('click', function(){

    const noakhaliDonateAmount = parseFloat(document.getElementById('noakhali-donate-amount').value);

    if (noakhaliDonateAmount <= 0 || isNaN(noakhaliDonateAmount)) {
        alert("Please enter a correct amount!");
        return;
    }
    alert("Thank you for your donation of BDT " + noakhaliDonateAmount);

    
   const noakhaliTotalDonateAmount = document.getElementById('noakhali-total-donate-amount');
   let noakhaliCurrentAmount = parseInt(noakhaliTotalDonateAmount.textContent); 
  
   let noakhaliNewAmount = noakhaliDonateAmount + noakhaliCurrentAmount;

   noakhaliTotalDonateAmount.innerHTML = `<img src="assets/coin.png">${noakhaliNewAmount}<span>BDT</span>`;


    const mainBalance = document.getElementById('my-main-balance');
    let presentAmount = parseInt(mainBalance.textContent);
    let restAmount = presentAmount - noakhaliDonateAmount;
    mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;

    historyList(noakhaliDonateAmount)
})

// -----------Donate for Flood Relief in Feni,Bangladesh ------------------

    const feniDonateButton = document.getElementById('feni-donate-button');
 
    feniDonateButton.addEventListener('click', function(){

        const feniDonateAmount = parseFloat(document.getElementById('feni-donate-amount').value);

        if (feniDonateAmount <= 0 || isNaN(feniDonateAmount)) {
            alert("Please enter a correct amount!");
            return;
        }
        alert("Thank you for your donation of BDT " + feniDonateAmount);

        const feniTotalDonateAmount = document.getElementById('feni-total-donate-amount');
        let feniCurrentAmount = parseInt(feniTotalDonateAmount.textContent); 
       
        let feniNewAmount = feniDonateAmount + feniCurrentAmount;
     
        feniTotalDonateAmount.innerHTML = `<img src="assets/coin.png">${feniNewAmount}<span>BDT</span>`;


        const mainBalance = document.getElementById('my-main-balance');
        let presentAmount = parseInt(mainBalance.textContent);
        let restAmount = presentAmount - feniDonateAmount;
        mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;
        historyListTwo(feniDonateAmount);

    })

    // ----------Aid for Injured in the Quota Movement----------------

    const InjuredDonateButton = document.getElementById('injured-donate-button');
    InjuredDonateButton.addEventListener('click', function(){

        const injuredDonateAmount = parseFloat(document.getElementById('injured-donate-amount').value);

        if (injuredDonateAmount <= 0 || isNaN(injuredDonateAmount)) {
            alert("Please enter a correct amount!");
            return;
            
        }
        alert("Thank you for your donation of BDT " + injuredDonateAmount);


        const injuredTotalDonateAmount = document.getElementById('injured-total-donate-amount');
        let injuredCurrentAmount = parseInt(injuredTotalDonateAmount.textContent); 

        let injuredNewAmount = injuredDonateAmount + injuredCurrentAmount;
     
        injuredTotalDonateAmount.innerHTML = `<img src="assets/coin.png">${injuredNewAmount}<span>BDT</span>`;


        const mainBalance = document.getElementById('my-main-balance');
        let presentAmount = parseInt(mainBalance.textContent);
        let restAmount = presentAmount - injuredDonateAmount;
        mainBalance.innerHTML = `<img src="assets/coin.png">${restAmount}<span>BDT</span>`;

        historyListThree(injuredDonateAmount);

    })


    