function displayQuote(response) {
  console.log("we are here");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let theme = document.querySelector("#word");

  let key = "t48f904c37f90502d04b44aabcf03oaf";
  let context =
    "You are an extremeley motivationl an inspirational AI. use the word you get from a user to generate a short one line inspirational quote to uplift and motivate the user. don't include quotation marks";
  let prompt = `generate a motivational quote using ${theme.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#form");
quoteForm.addEventListener("submit", generateQuote);
