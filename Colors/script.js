setBlocksColor()

function generateRandomColor() {
    const chars = "0123456789ABCDEF"

    let result = ""

    for (let i = 0; i < 6; i++) {
        result += chars[Math.floor(Math.random() * chars.length)]
    }

    return "#" + result
}


function setBlocksColor() {
    const divBlocks = document.querySelectorAll("div")

    divBlocks.forEach(block => {
        block.style.backgroundColor = generateRandomColor()
        block.querySelector("span").textContent = generateRandomColor()
        // block.querySelector("button").dataset.type = generateRandomColor()
    })
}


document.addEventListener("keydown", (event) => {
    if (event.code == "Space") {
        setBlocksColor()
    }
    console.log(event)
})


// document.addEventListener("click", (event) => {
//     console.log(event.target.dataset.type)
//     localStorage.setItem("color", event.target.dataset.type)
// })