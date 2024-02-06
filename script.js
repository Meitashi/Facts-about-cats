const btn = document.querySelector("button");
const text = document.querySelector(".text");

btn.addEventListener("click", function(){
    const query = fetch(`https://catfact.ninja/fact`);
    query
    .then(data => data.json())
    .then(quote => generateQuote(quote))
});

function generateQuote(quoteCode){
    text.innerHTML = "";
    text.innerHTML = quoteCode.fact;
};
