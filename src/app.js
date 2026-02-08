import view from "./view.js"

function app(){
    const initialState = {
        cards: [],
        sortingType: "",
        searchingPrompt: "",
        error: "",
    }
    const elements = {
        input: document.querySelector("input"),
        searchButton: document.querySelector("button"),
        plusButton: document.querySelector("#plus"),
        layout: document.querySelector("#cards"),
    }
    const watch = view(initialState, elements)
    }
app()