const $ = document
const searchBtnElem = $.querySelector('button')
const searchInputElem = $.querySelector('input')
const paragraphElem = $.querySelector('#paragraph')

const search = () => {
    let searchInputValue = searchInputElem.value
    
    // let searchRegex = `/${searchInputValue}/g`
                         // or //

    let searchRegex = new RegExp(`${searchInputValue}`, 'gi')

    paragraphElem.innerHTML = paragraphElem.textContent.replace(searchRegex, (item) => `<mark>${item}</mark>`)
}

searchBtnElem.addEventListener('click', search)
searchInputElem.addEventListener('keyup' , (e) => {
if (e.key === "Enter") {
    search()
}
})