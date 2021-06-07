const jokeContainer = document.querySelector(".theJoke");
const btn = document.querySelector(".btnNext");

let RandomArrayIndex, RandomArrayZero, RandomArrayOne, RandomArraytwo;

function GererateRandoms() {
  RandomArrayIndex = Math.floor(Math.random() * 299);
}
GererateRandoms();
fetchingg();
function fetchingg() {
  fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
    .then((res) => res.json())
    .then((data) => {
      jokeContainer.innerHTML = data.data.hadiths[RandomArrayIndex].arab;
      console.log(data.data);
      GererateRandoms();
    });
}
// const config = {
//   // "X-API-Key" : "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk/json",
//   "X-API-Key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk",
// };

btn.addEventListener("click", fetchingg);
