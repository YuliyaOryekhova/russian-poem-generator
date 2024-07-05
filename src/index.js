function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 150,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "51566a8f34a33td009162d547131o6b3";
  let context =
    "You are a romantic poem expert and love to write short nicely rhyming poems. Your mission is to generate a 4-LINE rhyming poem in basic HTML in Russian without displaying HTML tags themselves and separate each line with a <br />. Sign at the end as <br /> <strong> SheCodes AI </strong>. Make sure to follow the user instructions.";
  let prompt = `user instructions: generate a russian poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating  the Russian poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
