
const container = document.querySelector(".container")
let cartArr1 = JSON.parse(localStorage.getItem('cartArr'));
let totalPrice = 0
const price = document.querySelector(".price")


logCart()

function totalPrices() {
    totalPrice = 0
    cartArr1.map(x => {
        totalPrice += x.price
    })
    price.innerHTML = `
<h3>Total Price: ${totalPrice}</h3>
`
}

function logCart() {
    totalPrices()
    container.innerHTML = ""
    cartArr1.map((x,index) => {

        container.innerHTML += `

<div class="card d-flex align-items-center" id="${index}">
    <img src="${x.image}">
    <h4>${x.title}</h4>
    <p class="description">${x.description}</p>
    <div class="price">${x.price}</div>
<button>Cancel</button>
</div>
    `
    })
    cancelButton()
}
function cancelButton(){
    const cancelButton = document.querySelectorAll("button")
    cancelButton.forEach(x => x.onclick = cancelItem)
    function cancelItem(e) {

        totalPrice -= e.target.parentElement.children[3].innerText

        delete cartArr1[e.target.parentElement.id]
        cartArr1 = cartArr1.filter(n => n)

        console.log(cartArr1)
        logCart()


    }
}