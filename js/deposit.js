const addDepo = document.getElementById('deposit').addEventListener('click', function(){
    const deposit = document.getElementById("depo-amount");
    const newDepo = deposit.value;
    
        const depo = document.getElementById("depo");
        const previousDepo =depo.innerText;
        const totalDepo =parseFloat(newDepo) + parseFloat(previousDepo);
        depo.innerText = totalDepo;
        // total Balance Update

        const bal = document.getElementById("newBal");
        const newBal = bal.innerText;
        const totalBalance = parseFloat(newBal) + parseFloat(newDepo);
        bal.innerText = totalBalance;
        deposit.value = "";
    
   
})