/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {

  const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
  const data = await res.json();
  
  return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = async( element ) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading...";
  
  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuoteButtton = document.createElement("button");
  
  nextQuoteButtton.innerText = "Next Quote";
  
  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    
    element.replaceChildren( quoteLabel, authorLabel, nextQuoteButtton );
  }

  nextQuoteButtton.addEventListener("click", async() => {
    element.innerHTML = "Loading...";
    const quote = await fetchQuote();
    renderQuote( quote );
  });

  fetchQuote()
    .then( renderQuote )
}