document.addEventListener("DOMContentLoaded", getJoke);
document.getElementById("newJokeBtn").addEventListener("click", getJoke);

async function getJoke() {
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML =
    '<i class="fa-solid fa-spinner animate-spin"></i> Loading...';

  try {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    let data = await response.json();

    // Set joke inside the div (below button)
    jokeElement.textContent = data.joke;
  } catch (error) {
    jokeElement.textContent = "Oops! Something went wrong 😢";
  }
}
