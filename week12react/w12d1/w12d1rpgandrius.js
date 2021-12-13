"use strict";
const resources = document.querySelectorAll(".stats");
const landBlocks = document.querySelectorAll(".landBlock");
const statsDivs = {
    wood: resources[0],
    stone: resources[1],
    gold: resources[2],
    population: resources[3]
};
const stats = {
    wood: 100,
    stone: 100,
    gold: 200,
    population: 10
};
let landBlocksCounter = 1;
const helpers = {
    randomNumber: (num) => {
        return Math.round(Math.random() * num);
    },
    secondStateLandBlock: (element, blockStats) => {
        const mainDiv = document.createElement("div");
        const icon = document.createElement("i");
        icon.classList.add("fas");
        icon.classList.add("fa-shopping-cart");
        mainDiv.appendChild(icon);
        const stats = document.createElement("div");
        stats.classList.add("blockStats");
        const wood = document.createElement("div");
        wood.innerText = "Wood:" + blockStats.wood;
        const stone = document.createElement("div");
        stone.innerText = "Stone:" + blockStats.stone;
        stats.appendChild(wood);
        stats.appendChild(stone);
        mainDiv.appendChild(stats);
        return mainDiv;
    },
    updateStats: () => {
        for (const item in stats) {
            // @ts-ignore
            statsDivs[item].innerHTML = stats[item];
        }
    }
};
const functions = {
    landBlockClicked: (event, state) => {
        const target = event.target;
        if (state === 1) {
            if (stats.gold >= landBlocksCounter * 100) {
                stats.gold -= landBlocksCounter * 100;
                landBlocksCounter++;
                const blockStats = {
                    wood: helpers.randomNumber(100),
                    stone: helpers.randomNumber(100)
                };
                const secondBlock = helpers.secondStateLandBlock(target, blockStats);
                // @ts-ignore
                target.replaceChildren();
                target.appendChild(secondBlock);
                target.setAttribute("wood", String(blockStats.wood));
                target.setAttribute("stone", String(blockStats.stone));
                target.setAttribute("state", "2");
                helpers.updateStats();
            }
        }
        console.log(state);
    }
};
landBlocks.forEach(x => {
    landBlocks[0].onclick = (e) => {
        // @ts-ignore
        functions.landBlockClicked(e, Number(e.target.attributes[1].value));
    };
});
