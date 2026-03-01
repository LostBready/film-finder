// hello :)
import view from "./view.js"

function app(){
    const initialState = {
        cards: [],
        sortingType: "",
        searchingPrompt: "",
        error: "",
        isLoading: false
    }
    const elements = {
        input: document.querySelector("input"),
        searchButton: document.querySelector("button"),
        cards: document.querySelector("#cards"),
    }
    const watch = view(initialState, elements)

    elements.searchButton.addEventListener('click', async ()=>{
        if (! watch.isLoading){
            watch.isLoading = true
            const searchText = elements.input.value
            const dataRequest = await fetch(`http://www.omdbapi.com/?apikey=&s=${searchText}`)
            const data = await dataRequest.json()
            watch.isLoading = false
            watch.cards = data.Search
        }
    })
    }
app()