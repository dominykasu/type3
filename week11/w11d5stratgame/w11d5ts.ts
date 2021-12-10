let totalGold:number = 2000
let totalWood:number = 100
let totalStone:number = 100
let totalPopulation:number = 10
let landBlockCost:number = 100
const buyLandButton:HTMLElement = document.getElementById("buyLandButton")!
const resourceBar:HTMLElement = document.querySelector(".resourceBar")!
const landArea:HTMLElement = document.querySelector(".landArea")!
const landCostCounter:HTMLElement = document.querySelector(".landCostCounter")!
const notEnoughGoldAlert:HTMLElement = document.querySelector(".notEnoughGoldAlert")!
interface houseInterface {
    landWood:number
    landStone:number
    landPopulation?:number
}
let housesArr:houseInterface[] = []
let buildStoneHouseButton:any[] = []
let buildWoodHouseButton:any[] = []
let buildPeopleHouseButton:any[] = []

let id:number = 1

function resourceCount():number {
    resourceBar.innerHTML = `<div>
Gold: ${totalGold}
Wood: ${totalWood}
Stone: ${totalStone}
Population: ${totalPopulation}
</div>
`
    landCostCounter.innerHTML = `
    Land Cost: ${landBlockCost} Gold `
    totalStone += Math.round(totalStone/100)
    totalWood += Math.round(totalWood/100)
    totalGold += Math.round(totalPopulation/10)
    return totalStone && totalWood && totalGold && totalGold
}
setInterval(resourceCount,1000)

buyLandButton.onclick = ():void => {
    if (totalGold >= landBlockCost) {
        totalGold -= landBlockCost
        landBlockCost += 100
        let landWood: number = Math.round(Math.random() * 100)
        let landStone: number = Math.round(Math.random() * 100)
        housePush(landWood,landStone)
        console.log(housesArr)
        landArea.innerHTML += `
<div class="d-flex justify-content-between landCard">
    <div>    
    <h6>Wood: ${landWood} </h6>
    <h6>Stone: ${landStone}</h6>
     Population: Random from 0 to 10
    </div>
    <div class="buildButtons d-flex flex-column">
    <button class="buildStoneHouseButton" id=${id++} onclick="buildStoneHouse()">Build Stone House</button>
    <button class="buildWoodHouseButton">Build Wood House</button>
    <button class="buildPopoulationHouseButton">Build Population House</button>
</div>
</div>
    `
        buildStoneHouseButton = []
        buildStoneHouseButton.push(document.querySelectorAll(".buildStoneHouseButton"))
        notEnoughGoldAlert.style.display = "none"
        notEnoughGoldAlert.innerText = ``
        // buildStoneHouse()

    } else {
        notEnoughGoldAlert.style.display = "block"
        notEnoughGoldAlert.innerText = `NOT ENOUGH GOLD!!!`
    }
}
function housePush(landWood:number,landStone:number):void {
    housesArr.push({"landWood":landWood, "landStone":landStone})
}

function buildStoneHouse():void {

    // console.log(buildStoneHouseButton[0])

    for (let i = 0; i < buildStoneHouseButton[0].length; i++) {

        buildStoneHouseButton[0][i].onclick = () => {
            console.log(buildStoneHouseButton[0][i].id)
        }
        }
        // console.log(buildStoneHouseButton)
        // console.log(buildStoneHouseButton.length)
        // console.log("aa")
    // }

}



