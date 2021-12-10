"use strict";
let totalGold = 2000;
let totalWood = 100;
let totalStone = 100;
let totalPopulation = 10;
let landBlockCost = 100;
const buyLandButton = document.getElementById("buyLandButton");
const resourceBar = document.querySelector(".resourceBar");
const landArea = document.querySelector(".landArea");
const landCostCounter = document.querySelector(".landCostCounter");
const notEnoughGoldAlert = document.querySelector(".notEnoughGoldAlert");
let housesArr = [];
let buildStoneHouseButton = [];
let buildWoodHouseButton = [];
let buildPeopleHouseButton = [];
let resourceCalc = null;
let id = 1;
function resourceCount() {
    resourceBar.innerHTML = `<div>
Gold: ${totalGold}
Wood: ${totalWood}
Stone: ${totalStone}
Population: ${totalPopulation}
</div>
`;
    landCostCounter.innerHTML = `
    Land Cost: ${landBlockCost} Gold `;
    totalStone += Math.round(totalStone / 100);
    totalWood += Math.round(totalWood / 100);
    totalGold += Math.round(totalPopulation / 10);
    return totalStone && totalWood && totalGold && totalGold;
}
setInterval(resourceCount, 1000);
buyLandButton.onclick = () => {
    if (totalGold >= landBlockCost) {
        totalGold -= landBlockCost;
        landBlockCost += 100;
        let landWood = Math.round(Math.random() * 100);
        let landStone = Math.round(Math.random() * 100);
        housePush(landWood, landStone);
        console.log(housesArr);
        landArea.innerHTML += `
<div class="d-flex justify-content-between landCard">
    <div class="resourceCalc">    
    <h6>Wood: ${landWood} </h6>
    <h6>Stone: ${landStone}</h6>
     Population: Random from 0 to 10
    </div>
    <div class="buildButtons d-flex flex-column">
<!--    //id nereikalingas??-->
    <button class="buildStoneHouseButton" id=${id++} onclick="buildStoneHouse()">Build Stone House</button>
    <button class="buildWoodHouseButton">Build Wood House</button>
    <button class="buildPopoulationHouseButton">Build Population House</button>
</div>
</div>
    `;
        resourceCalc = document.querySelectorAll(".resourceCalc");
        buildStoneHouseButton = [];
        buildStoneHouseButton.push(document.querySelectorAll(".buildStoneHouseButton"));
        notEnoughGoldAlert.style.display = "none";
        notEnoughGoldAlert.innerText = ``;
        // buildStoneHouse()
    }
    else {
        notEnoughGoldAlert.style.display = "block";
        notEnoughGoldAlert.innerText = `NOT ENOUGH GOLD!!!`;
    }
};
function housePush(landWood, landStone) {
    housesArr.push({ "landWood": landWood, "landStone": landStone });
}
function buildStoneHouse() {
    // console.log(buildStoneHouseButton[0])
    for (let i = 0; i < buildStoneHouseButton[0].length; i++) {
        buildStoneHouseButton[0][i].onclick = () => {
            console.log(buildStoneHouseButton[0][i].parentElement);
            console.log(housesArr[i]);
            totalGold -= 50;
            totalWood -= 50;
            buildStoneHouseButton[0][i].parentElement.innerHTML = `<i style="font-size: 96px; color: Dodgerblue;" class="fas fa-archway"></i>`;
            let stonesGenerated = 0;
            resourceCalc[i].innerHTML = `${housesArr[i].landStone / 100} stone per second
            <p>Total stone mined: ${stonesGenerated}</p>`;
            function generateStone() {
                totalStone += housesArr[i].landStone / 100;
                stonesGenerated += housesArr[i].landStone / 100;
                resourceCalc[i].innerHTML = `${housesArr[i].landStone / 100} stone per second
            <p>Total stone mined: ${stonesGenerated}</p>`;
            }
            setInterval(generateStone, 1000);
            //kiekvienam sklypui pasirasyti resource calculator
        };
    }
    // console.log(buildStoneHouseButton)
    // console.log(buildStoneHouseButton.length)
    // console.log("aa")
    // }
}
