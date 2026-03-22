// hello :)
import "dotenv/config";
import view from "./view.js";

const API_KEY = process.env.API_KEY;

function app() {
  console.log(API_KEY)

  const initialState = {
    cards: [],
    sortingType: "",
    searchingPrompt: "",
    error: "",
    isLoading: false,
  };

  const elements = {
    input: document.querySelector("input"),
    searchButton: document.querySelector("button"),
    cards: document.querySelector("#cards"),
    select: document.querySelector("select"),
    errorBox: document.querySelector("#error-box"),
  };
  const watch = view(initialState, elements);

  elements.searchButton.addEventListener("click", async () => {
    watch.error = ''
    try {
      const searchType = elements.select.value;
      if (!watch.isLoading) {
        watch.isLoading = true;
        const searchText = elements.input.value;
        const dataRequest = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&type=${searchType}`,
        );
        const data = await dataRequest.json();
        watch.isLoading = false;
        console.log(data);

        if (data.Response === "True") {
          watch.cards = data.Search;
        } else {
          watch.error = data.Error;
        }
      }
    } catch (error) {
      console.log('erroring')
      watch.isLoading = false;
      watch.error = error.message
    }
  });
}
app();
