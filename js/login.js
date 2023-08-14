const Text =document.getElementById('btn').addEventListener('click', function(){
    const email = document.getElementById('text').value;
    const pass = document.getElementById('pass').value;
    if(email === "admin@gmail.com" && pass === "admin"){
        location.href = "bank.html";
    }else{
       alert("Please Enter Valid Email & PassWord");
    }
})

//Bank part

