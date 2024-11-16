var quote_contant = document.getElementById("quote-contant");

function showQuotes() {
  var quotes = {
    quotesName: [
      "You miss 100% of the shots you don't take.",
      "Do not take life too seriously. You will not get out alive.",
      "So many books, so little time",
      "If you tell the truth, you don't have to remember anything.",
      "A friend is someone who knows all about you and still loves you.",
    ],
    author: [
      "--Wayne Gretzy",
      "--Elbert Hubbard",
      "― Frank Zappa",
      "― Mark Twain",
      "― Elbert Hubbard",
    ],
  };

  var newQuote_N=[];
  
 function getRandom(){
  if(newQuote_N.length===quotes.quotesName.length){
    newQuote_N=[];
  }

  var num;

  do{
    num= Math.floor(Math.random() * quotes.quotesName.length);
  }
  while(newQuote_N.includes(num))
    
    newQuote_N.push(num);
     return num;
 }
   

 var num=getRandom();
    
    quote_contant.innerHTML = `<p >“${quotes.quotesName[num]}”</p>
  
       <span > ${quotes.author[num]}</span>`;
    quotes.quotesName.splice(num,1);
    quotes.author.splice(num,1);
  

  
}
