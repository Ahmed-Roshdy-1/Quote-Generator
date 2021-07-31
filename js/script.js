// Get Quote From API
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("There is no quote Fetched", error);
  }
}

// On Load
getQuote();
