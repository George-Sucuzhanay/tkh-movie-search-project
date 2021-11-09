export const clearMovies = () => {
    const list = document.getElementById("search")
    while (list.firstChild) {
        list.firstChild.remove()
    }
}
const createListItem = (title, year, poster) => {
    const caption = `${year}, ${title}`

    const captionNode = document.createTextNode('figcaption')
}