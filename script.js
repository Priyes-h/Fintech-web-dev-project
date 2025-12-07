function currency() {
    window.location.href = "currency.html";
}
function trans(){
    window.location.href = "transfer.html";
}
function convert(){
     
            let amount = document.getElementById("amount").value;
            let from = document.getElementById("fromCurrency").value;
            let to = document.getElementById("toCurrency").value;

            let result = 0;
            let meow = "";
            

            if (from === "INR" && to === "USD") {
                result = amount / 90;
                 meow = "$";
            }

            if (from === "USD" && to === "INR") {
                result = amount * 90;
                meow = "₹";

            }

            if (from === "INR" && to === "EUR") {
                result = amount / 100;
                meow = "€";
            }
            if (from === "EUR" && to === "INR") {
                result = amount * 100;
                 meow = "₹";
            }
            if (from === "USD" && to === "EUR") {
                result = amount * 0.95;
                 meow = "€";
            }
            if (from === "EUR" && to === "USD") {
                result = amount / 0.95;
                 meow = "$";
            }  

            document.getElementById("result").textContent = "Converted Value: " + result.toFixed(2) + meow ;
        }
        function transfer(){
            alert("Transfer Successful");
            document.getElementById("sucess").style.opacity = "1";
        }
