import onChange from "on-change";
function view(state, elements) {
  const watch = onChange(state, (path, value) => {
    switch (path) {
      case "cards":
        renderCards(value, elements.cards);
        break;
      case "isLoading":
        clearContent(elements.cards, elements.errorBox);
        value
          ? showPreloader(elements.searchButton)
          : removePreloader(elements.searchButton);
        break;
      case "error":
        showErrorMessage(value, elements.errorBox);
        break;
    }
  });
  return watch;
}

const showErrorMessage = (message, boxNode) => {
  boxNode.textContent = message;
};

const clearContent = (cardsDiv, errorBoxNode) => {
  cardsDiv.innerHTML = "";
  errorBoxNode.innerHTML = "";
};

const showPreloader = (buttonDiv) => {
  buttonDiv.disabled = true;
  const preloaderDiv = document.createElement("div");
  preloaderDiv.classList.add("loader");
  document.body.append(preloaderDiv);
};

const removePreloader = (buttonDiv) => {
  buttonDiv.disabled = false;
  const preloaderDiv = document.querySelector(".loader");
  preloaderDiv.remove();
};

const renderCards = (filmsArr, cardsDiv) => {
  filmsArr.forEach(({ Title, Year, Type, Poster }) => {
    const filmCard = createCard(Title, Poster, Type, Year);
    cardsDiv.append(filmCard);
  });
};

const createCard = (titleText, linkImage, type, yearText) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const desc = document.createElement("p");
  const year = document.createElement("p");

  div.classList.add("card");
  desc.classList.add("desc");
  year.classList.add("year");

  title.textContent = titleText;
  img.setAttribute("src", linkImage);
  desc.textContent = type;
  year.textContent = yearText;

  div.append(img);
  div.append(title);
  div.append(desc);
  div.append(year);

  return div;
};

export default view;
