const container = document.querySelector(".container")
let cartArr = []
// fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>
//         // console.log(json)
// localStorage.setItem('shop',JSON.stringify(json))
//
// // json.map(allItems)
//     )
let shopArr = JSON.parse(localStorage.getItem('shop'));
let index = null


    // console.log(item)
    shopArr.map((x,index) => {

        container.innerHTML += `
<div class="card d-flex align-items-center" id="${index}">
    <img src="${x.image}">
    <h4>${x.title}</h4>
    <p class="description">${x.description}</p>
    <div class="price">${x.price}</div>
<button>BUY</button>
</div>
    `


    })
const buyButton = document.querySelectorAll("button")
buyButton.forEach(x=>x.onclick = buyClicked)

function buyClicked(e) {

    let index = e.target.parentElement.id
    // console.log(shopArr[index])
    cartArr.push(shopArr[index])

    localStorage.setItem("cartArr", JSON.stringify(cartArr))

}
const cartButton = document.querySelector(".fa-cart-arrow-down")
cartButton.onclick = () => {
    document.location.href= "./w9d4cart.html"
}



