"use strict";
const resources = document.querySelectorAll(".stats");
const landBlocks = document.querySelectorAll(".landBlock");
const field = document.querySelector(".field");
const statsDivs = {
    wood: resources[0],
    stone: resources[1],
    gold: resources[2],
    population: resources[3]
};
const stats = {
    wood: 100,
    stone: 100,
    gold: 2000,
    population: 10
};
let landBlocksCounter = 1;
const helpers = {
    randomNumber: (num) => {
        return Math.round(Math.random() * num);
    },
    newLandBlock: () => {
        const main = document.createElement('div');
        main.classList.add('landBlock');
        main.setAttribute('state', '1');
        const icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add('fa-plus-square');
        main.appendChild(icon);
        main.onclick = (e) => {
            // @ts-ignore
            functions.landBlockClicked(e, Number(e.target.attributes[1].value));
        };
        field.appendChild(main);
        return main;
    },
    secondStateLandBlock: (element, blockStats) => {
        const mainDiv = document.createElement("div");
        mainDiv.style.pointerEvents = "none";
        const icon = document.createElement("i");
        // icon.style.pointerEvents = "none"
        icon.classList.add("fas");
        icon.classList.add("fa-shopping-cart");
        mainDiv.appendChild(icon);
        const stats = document.createElement("div");
        // stats.style.pointerEvents = "none"
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
    secondStateLandShop: () => {
        const main = document.createElement('div');
        main.classList.add("shop");
        const subDiv1 = document.createElement('div');
        subDiv1.classList.add('shopItem');
        subDiv1.classList.add('stone');
        const icon1 = document.createElement('i');
        icon1.classList.add('fas');
        icon1.classList.add('fa-archway');
        subDiv1.appendChild(icon1);
        const child1 = document.createElement('div');
        child1.style.pointerEvents = "none";
        child1.classList.add('text');
        child1.innerText = "Stone";
        subDiv1.appendChild(child1);
        const subDiv2 = document.createElement('div');
        subDiv2.classList.add('shopItem');
        subDiv2.classList.add('wood');
        const icon2 = document.createElement('i');
        icon2.classList.add('fas');
        icon2.classList.add('fa-campground');
        subDiv2.appendChild(icon2);
        const child2 = document.createElement('div');
        child2.style.pointerEvents = "none";
        child2.classList.add('text');
        child2.innerText = "Wood";
        subDiv2.appendChild(child2);
        const subDiv3 = document.createElement('div');
        subDiv3.classList.add('shopItem');
        subDiv3.classList.add('people');
        const icon3 = document.createElement('i');
        icon3.classList.add('fas');
        icon3.classList.add('fa-home');
        subDiv3.appendChild(icon3);
        const child3 = document.createElement('div');
        child3.style.pointerEvents = "none";
        child3.classList.add('text');
        child3.innerText = "People";
        subDiv3.appendChild(child3);
        main.appendChild(subDiv1);
        main.appendChild(subDiv2);
        main.appendChild(subDiv3);
        return main;
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
                const shopBlock = helpers.secondStateLandShop();
                // @ts-ignore
                target.replaceChildren();
                target.appendChild(secondBlock);
                shopBlock.classList.add("d-none");
                target.appendChild(shopBlock);
                target.setAttribute("wood", String(blockStats.wood));
                target.setAttribute("stone", String(blockStats.stone));
                target.setAttribute("state", "2");
                helpers.updateStats();
                helpers.newLandBlock();
            }
        }
        if (state === 2) {
            if (target.children[1].className.includes('d-none')) {
                target.style.marginRight = "100px";
                target.children[1].classList.remove('d-none');
            }
            else {
                target.style.marginRight = "20px";
                target.children[1].classList.add('d-none');
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
