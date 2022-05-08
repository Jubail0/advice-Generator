let advice_number = document.getElementById("advice_number");
let quotes= document.getElementById("quotes");
let btn = document.getElementById("dice");
btn.addEventListener("click", function(){
    fetch('https://api.adviceslip.com/advice')
    .then( (Response) => {
        return Response.json()
    })
    .then (
        (data)=>{
            let id = data.slip.id;
            let randomQuote = data.slip.advice;
    
            advice_number.innerHTML=`Advice #${id}`;
            quotes.innerHTML=randomQuote;
        }
    )
    
})

