const resources:NodeListOf<HTMLElement> = document.querySelectorAll(".stats")!
const landBlocks:NodeListOf<HTMLElement> = document.querySelectorAll(".landBlock")!

// console.log(resources)
interface BlockStats {
    wood:number,
    stone:number
}
interface StatsDivs {
    wood:HTMLElement
    stone:HTMLElement
    gold:HTMLElement
    population:HTMLElement
}
interface StatsInterface {
    wood:number,
    stone:number,
    gold:number,
    population:number
}

const statsDivs:StatsDivs = {
    wood:resources[0],
    stone:resources[1],
    gold:resources[2],
    population:resources[3]
}
const stats:StatsInterface = {
    wood:100,
    stone:100,
    gold:200,
    population:10
}
let landBlocksCounter:number = 1

const helpers = {
    randomNumber: (num:number):number => {
        return Math.round(Math.random()*num)
    },
    secondStateLandBlock: (element:HTMLElement, blockStats:BlockStats):HTMLElement => {
        const mainDiv = document.createElement("div")

        const icon = document.createElement("i")
        icon.classList.add("fas")
        icon.classList.add("fa-shopping-cart")
        mainDiv.appendChild(icon)

        const stats = document.createElement("div")
        stats.classList.add("blockStats")

        const wood = document.createElement("div")
        wood.innerText = "Wood:"+blockStats.wood
        const stone = document.createElement("div")
        stone.innerText = "Stone:"+blockStats.stone

        stats.appendChild(wood)
        stats.appendChild(stone)
        mainDiv.appendChild(stats)
        return mainDiv
    },
    updateStats:():void => {
        for (const item  in stats) {
            // @ts-ignore
            statsDivs[item].innerHTML = stats[item]

        }
    }
}

const functions= {

    landBlockClicked: (event:MouseEvent, state:number):void => {
        const target = event.target as HTMLElement
        if (state === 1) {
            if (stats.gold >= landBlocksCounter * 100) {
                stats.gold -= landBlocksCounter * 100;
                landBlocksCounter++;

                const blockStats = {
                    wood: helpers.randomNumber(100),
                    stone: helpers.randomNumber(100)
                }
                const secondBlock = helpers.secondStateLandBlock(target, blockStats)
                // @ts-ignore
                target.replaceChildren()
                target.appendChild(secondBlock)
                target.setAttribute("wood", String(blockStats.wood) )
                target.setAttribute("stone", String( blockStats.stone))
                target.setAttribute("state", "2")
                helpers.updateStats()

            }
        }
        console.log(state)
    }
}
landBlocks.forEach(x =>{
    landBlocks[0].onclick = (e) => {
        // @ts-ignore
        functions.landBlockClicked(e,Number(e.target.attributes[1].value) )

    }
})


