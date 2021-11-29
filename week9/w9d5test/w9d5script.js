const heightC = document.getElementById("height")
const widthC = document.getElementById("width")
const redC = document.getElementById("red")
const greenC = document.getElementById("green")
const blueC = document.getElementById("blue")
const violetC = document.getElementById("violet")
const pixelsB = document.getElementById("bPixels")
const typeB = document.getElementById("bType")
const colorB = document.getElementById("bColor")
const radiusB = document.getElementById("radiusB")
const paddingC = document.getElementById("paddingC")
const marginC = document.getElementById("marginC")
const genCardButton = document.getElementById("genCardButton")
const categoryText = document.getElementById("categoryText")
const subCatText = document.getElementById("subCatText")
const addContentButton = document.getElementById("addContent")
const cardPreview = document.getElementById("cardPreview")
const appendCardButton = document.getElementById("appendCardButton")
const resetCard = document.getElementById("resetButton")
const errorField = document.getElementById("error-text")
const cardList = document.getElementById("cardList")
let selectedColor = null

redC.onclick = () => {
    selectedColor = "#ff6767"
    redC.classList.add("selected")
    greenC.classList.remove("selected")
    blueC.classList.remove("selected")
    violetC.classList.remove("selected")
}
greenC.onclick = () => {
    selectedColor = "#96f396"
    greenC.classList.add("selected")
    redC.classList.remove("selected")
    blueC.classList.remove("selected")
    violetC.classList.remove("selected")
}
blueC.onclick = () => {
    selectedColor = "#7272ff"
    blueC.classList.add("selected")
    redC.classList.remove("selected")
    greenC.classList.remove("selected")
    violetC.classList.remove("selected")
}
violetC.onclick = () => {
    selectedColor = "#720372"
    violetC.classList.add("selected")
    redC.classList.remove("selected")
    greenC.classList.remove("selected")
    blueC.classList.remove("selected")
}
genCardButton.onclick = generateCard
function generateCard(){
    let height = heightC.value
    let width = widthC.value
    let pixelsButton = pixelsB.value
    let typeButton = typeB.value
    let colorButton = colorB.value
    let borderR = radiusB.value
    let padding = paddingC.value
    let margin = marginC.value
    cardPreview.innerHTML = `<div id="insideTextCard"><div>`
    cardPreview.style.height = `${height}px`
    cardPreview.style.width = `${width}px`
    cardPreview.style.backgroundColor = selectedColor
    cardPreview.style.border = `${pixelsButton}px`+" "+`${typeButton}`+" "+`${colorButton}`
    cardPreview.style.borderRadius = `${borderR}%`
    cardPreview.style.padding = `${padding}px`
    cardPreview.style.margin = `${margin}px`
}
addContentButton.onclick = generateContent
function generateContent() {
    let categorySelect = categoryText.value
    let subCategorySelect = subCatText.value
if (categorySelect != "" && subCategorySelect != ""){
    fetch(`http://167.99.138.67:8281/random/${categorySelect}/${subCategorySelect}`)
        .then(app => app.json())
        .then(answer => {
            console.log(answer)
            let insideTextCard = document.getElementById("insideTextCard")
            if (answer.success === false) {
                errorField.innerHTML = `<h5>${answer.message}</h5>`
            }
            if (insideTextCard === null){
                errorField.innerHTML = `
                    <p>Please create card first 1</p>
                    `}
           //  else if (cardPreview.innerHTML != 0) {
           //      errorField.innerHTML = `<h5>Card already contains an image</h5>`
           //  }
            else if (answer.item.indexOf("http://") === 0 || answer.item.indexOf("https://") === 0) {
                errorField.innerHTML = `<h5>Success</h5>`
                cardPreview.innerHTML = `
                <img src="${answer.item}">
                `
            }

            else {

                if(insideTextCard === null){
                    errorField.innerHTML = `
                    <p>Please create card first</p>
                    `
                } else {

                    errorField.innerHTML = `<h5>Success</h5>`
                    insideTextCard.innerHTML = `
                <p>${answer.item}</p>
                `
                }}

        })
} else {
    errorField.innerHTML = `<h5>Add text to Card Generator Fields</h5>`
}
}
resetCard.onclick = () => {
    cardPreview.innerHTML = ""
    cardPreview.style = null
    errorField.innerHTML = ""
}
appendCardButton.onclick = appendContent
function appendContent () {
   let appendContentAll = cardPreview.cloneNode(true)
   cardList.appendChild(appendContentAll)

}