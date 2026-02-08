import onChange from "on-change"
function view(state, elements){
    const watch = onChange(state, (path, value) => {
        console.log(path, value)
    })
    return watch
}
export default view