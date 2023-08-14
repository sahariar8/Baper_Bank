document.getElementById("withdraw").addEventListener("click", function(){
    const newAmount = document.getElementById("value");
    const amount = newAmount.value;
    const previousAmount = document.getElementById("with");
    const total =previousAmount.innerText;
    const Withdraw = parseFloat(total) + parseFloat(amount);
    previousAmount.innerText = Withdraw;

    // total balance after Withdraw
    const find = document.getElementById("newBal");
    const preTotal = find.innerText;
    const newTotal =parseFloat(preTotal) - parseFloat(amount);
    find.innerText = newTotal;



    
    newAmount.value="";
})